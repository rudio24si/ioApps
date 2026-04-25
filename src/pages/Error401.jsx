import ErrorPage from "../components/ErrorPage";

export default function Error401() {
    return (
        <ErrorPage
            kodeError={401}
            deskripsiError="Akses tidak diizinkan. Anda perlu login atau memiliki izin yang valid untuk mengakses halaman ini."
            gambarError="https://cdn-icons-png.flaticon.com/512/1152/1152792.png"
        />
    );
}
