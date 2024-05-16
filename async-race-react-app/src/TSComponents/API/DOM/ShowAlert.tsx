import Swal from "sweetalert2";

const ShowAlert = (titleString: string) => {
    Swal.fire({
        title: titleString,
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `
        }
    });
}

export default ShowAlert;