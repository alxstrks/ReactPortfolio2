export default function MainCard() {
  return (
    <div className="space-y-5">
        <h1 className="font-bold text-5xl text-primary">Start now,<br />Journey awaits!</h1>
        <h2 className="font-medium text-xl text-secondary">portfolio and website design</h2>
        <p className="font-normal text-third">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum impedit enim rerum similique sequi. At totam sunt possimus dolor. Cum earum culpa quisquam voluptatibus esse fuga ea ratione corrupti quaerat!</p>
        <div className="flex space-x-6">
            <div className="">
                <button className="bg-white text-black text-xl font-bold py-3 px-10 rounded-full">
                    Portfolio
                </button>
            </div>
            <div className="my-auto">
                <button className="text-white underline">
                    Schedule view
                </button>
            </div>
        </div>
    </div>
  )
}
