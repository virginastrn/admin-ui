export const users = [
    {
        name: "Virgina",
        email: "virgina@gmail.com",
        street: "Jl. Imam Bonjol",
        city: "Semarang",
        age: 20,
        job: "Web Developer",
    },
    {
        name: "Staraina",
        email: "staraina@gmail.com",
        street: "Jl. Indraprasta",
        city: "Batang",
    },
    {
        name: "Gigin",
        email: "gigin@gmail.com",
        street: "Jl. Pemuda",
        city: "Kendal",
    },
];

const city = "Jakarta";
const street = "Jl Kebon Jeruk";

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};