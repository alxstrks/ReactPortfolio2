import avtar from "./Avtar.jpg"

export default function NameCard() {
  return (
    <div className="flex">
      <img src={avtar} alt="avtar" className="rounded-full size-16"/>
      <h2 className="text-left ml-5 my-auto text-white text-3xl font-semibold">Elon Musk</h2>
    </div>
  )
}
