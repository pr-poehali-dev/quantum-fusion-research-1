"""Приём заявок с формы заказа PLAip"""
import json
import os


def handler(event: dict, context) -> dict:
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')

    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    material = body.get('material', '').strip()
    quantity = body.get('quantity', '').strip()
    comment = body.get('comment', '').strip()
    filename = body.get('filename', '').strip()

    if not name or not contact or not material or not quantity:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните все обязательные поля'}, ensure_ascii=False)
        }

    recipient = os.environ.get('RECIPIENT_EMAIL')
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')

    if recipient and smtp_host and smtp_user and smtp_password:
        import smtplib
        from email.mime.text import MIMEText
        from email.mime.multipart import MIMEMultipart

        html = f"""
        <h2>Новая заявка с PLAip</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Имя</td><td style="padding:8px">{name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Контакт</td><td style="padding:8px">{contact}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Материал</td><td style="padding:8px">{material}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Количество</td><td style="padding:8px">{quantity} шт.</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Файл</td><td style="padding:8px">{filename or '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Комментарий</td><td style="padding:8px">{comment or '—'}</td></tr>
        </table>
        """

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка от {name} — PLAip'
        msg['From'] = smtp_user
        msg['To'] = recipient
        msg.attach(MIMEText(html, 'html', 'utf-8'))

        with smtplib.SMTP_SSL(smtp_host, 465) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, recipient, msg.as_string())

        print(f'Email отправлен на {recipient}')
    else:
        print(f'[ЗАЯВКА] {name} | {contact} | {material} | {quantity} шт. | файл: {filename} | {comment}')

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True, 'message': 'Заявка принята'}, ensure_ascii=False)
    }