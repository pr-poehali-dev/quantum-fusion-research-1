import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

const MATERIALS = [
  { value: "pla", label: "PLA — стандартный" },
  { value: "abs", label: "ABS — ударопрочный" },
  { value: "petg", label: "PETG — термостойкий" },
  { value: "tpu", label: "TPU — гибкий" },
  { value: "nylon", label: "Нейлон — прочный" },
  { value: "resin", label: "Смола (Resin) — детальный" },
]

const QUANTITIES = ["1", "2–5", "6–20", "21–100", "100+"]

export function OrderForm() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [material, setMaterial] = useState("")
  const [quantity, setQuantity] = useState("")
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [comment, setComment] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) setFile(dropped)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) setFile(selected)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
          <Icon name="CheckCircle" size={32} className="text-red-500" />
        </div>
        <h3 className="text-2xl font-bold text-white font-orbitron">Заявка отправлена!</h3>
        <p className="text-gray-400 max-w-sm">
          Мы получили вашу заявку и свяжемся с вами в течение 2 часов для уточнения деталей и расчёта стоимости.
        </p>
        <Button
          variant="outline"
          className="mt-4 border-red-500/40 text-red-400 hover:bg-red-500/10 bg-transparent"
          onClick={() => {
            setSubmitted(false)
            setFile(null)
            setMaterial("")
            setQuantity("")
            setName("")
            setContact("")
            setComment("")
          }}
        >
          Оформить ещё один заказ
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* File upload */}
      <div>
        <Label className="text-white mb-2 block">3D-файл (STL, OBJ, STEP, 3MF)</Label>
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors duration-200 ${
            isDragging
              ? "border-red-500 bg-red-500/10"
              : file
              ? "border-red-500/60 bg-red-500/5"
              : "border-white/20 hover:border-red-500/50 hover:bg-white/5"
          }`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".stl,.obj,.step,.stp,.3mf"
            className="hidden"
            onChange={handleFileChange}
          />
          {file ? (
            <div className="flex flex-col items-center gap-2">
              <Icon name="FileCheck" size={36} className="text-red-500" />
              <p className="text-white font-medium">{file.name}</p>
              <p className="text-gray-400 text-sm">{(file.size / 1024 / 1024).toFixed(2)} МБ</p>
              <p className="text-red-400 text-xs mt-1">Нажмите, чтобы заменить</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Icon name="Upload" size={36} className="text-gray-500" />
              <p className="text-white font-medium">Перетащите файл сюда</p>
              <p className="text-gray-400 text-sm">или нажмите для выбора</p>
              <p className="text-gray-500 text-xs mt-1">STL, OBJ, STEP, 3MF — до 50 МБ</p>
            </div>
          )}
        </div>
      </div>

      {/* Material + Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label className="text-white mb-2 block">Материал</Label>
          <Select value={material} onValueChange={setMaterial} required>
            <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-red-500">
              <SelectValue placeholder="Выберите материал" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-white/20">
              {MATERIALS.map((m) => (
                <SelectItem key={m.value} value={m.value} className="text-white focus:bg-red-500/20 focus:text-white">
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-white mb-2 block">Количество</Label>
          <Select value={quantity} onValueChange={setQuantity} required>
            <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-red-500">
              <SelectValue placeholder="Количество штук" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-white/20">
              {QUANTITIES.map((q) => (
                <SelectItem key={q} value={q} className="text-white focus:bg-red-500/20 focus:text-white">
                  {q} шт.
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Name + Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label className="text-white mb-2 block">Ваше имя</Label>
          <Input
            placeholder="Иван Иванов"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-red-500"
          />
        </div>
        <div>
          <Label className="text-white mb-2 block">Телефон или email</Label>
          <Input
            placeholder="+7 900 000-00-00"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-red-500"
          />
        </div>
      </div>

      {/* Comment */}
      <div>
        <Label className="text-white mb-2 block">Комментарий <span className="text-gray-500 font-normal">(необязательно)</span></Label>
        <Textarea
          placeholder="Цвет, постобработка, особые требования..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-red-500 resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-6 border-0"
      >
        <Icon name="Send" size={20} className="mr-2" />
        Отправить заявку
      </Button>

      <p className="text-center text-gray-500 text-xs">
        Ответим в течение 2 часов и пришлём точный расчёт стоимости
      </p>
    </form>
  )
}
