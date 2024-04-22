import Portrait from './backlitPortrait.PNG';

export default function Home() {
  return (
    <div className="flex tabcontent" id="Home">
        <div className="m-auto overflow-hidden">
          <img src={Portrait} alt="portrait" className='h-[90vh]'/>
        </div>
        test
    </div>
  )
}
