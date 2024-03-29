export function fetchProfileData() {
    const userPromise = fetchUser();

    return {
        user: wrapPromise(userPromise),
    };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
    let status = "pending";
    let result;
    const suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
}

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fetch('http://localhost:8080/user').then(resp => resp.json()));
        }, 2000);
    });
}