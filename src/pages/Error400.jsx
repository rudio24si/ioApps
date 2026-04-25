import ErrorPage from "../components/ErrorPage";

export default function Error400() {
    return (
        <ErrorPage
            kodeError={400}
            deskripsiError="Permintaan tidak valid. Server tidak dapat memproses permintaan karena sintaks yang salah atau data yang tidak lengkap."
            gambarError="https://cdn-icons-png.flaticon.com/512/2797/2797387.png"
        />
    );
}
