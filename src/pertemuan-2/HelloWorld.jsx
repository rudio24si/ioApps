export default function HelloWorld() {
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <img src="img/rudiothumbnail.jpg" alt="logo" width="100%"/>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai />
            <QuoteText />
            <UserCard
                nama="Rudio Winaldo"
                nim="24573028   "
                tanggal={new Date().toLocaleDateString()}
            />
            <UserCard {...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai() {
    return (
        <small>Salam dari binjai👌</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props) {
    return (
        <div className="card">
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}