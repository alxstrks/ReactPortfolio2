export default function NavBar() {

    const navigation = [
        {name: 'Home'},
        {name: 'About'},
        {name: 'Projects'},
        {name: 'Contact'}
    ]

    function openTab(tabName) {
        console.log('temop:' + tabName);

        let tabcontent = document.getElementsByClassName("tabcontent");
        for (let i=0; i < tabcontent.length; i++) {
            if (!tabcontent[i].className.includes("hidden")) {
                tabcontent[i].className += " hidden";
            }
        }

        let elem = document.getElementById(tabName);
        if (elem) {
            elem.className = elem.className.replace(" hidden", "");
        }
    }

  return (
    <nav className="py-4">
        <div className="flex justify-center space-x-20">
            {
                navigation.map((curr) => (
                    <button key={curr.name} className="text-secondary text-lg font-semibold" onClick={() => openTab(curr.name)}>
                        {curr.name}
                    </button>
                ))
            }
        </div>
    </nav>
  )
}
