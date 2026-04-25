import ErrorPage from "../components/ErrorPage";

export default function Error403() {
    return (
        <ErrorPage
            kodeError={403}
            deskripsiError="Akses ditolak. Anda tidak memiliki hak untuk mengakses halaman ini meskipun sudah login."
            gambarError="https://cdn-icons-png.flaticon.com/512/2996/2996513.png"
        />
    );
}
