/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [{
    name: 'Irfan',
    age: 20,
    major: 'Teknik informatika'
  },
  {
    name: 'Roger',
    age: 22,
    major: ' Teknik Pelayaran'
  },
  {
    name: 'Luffy',
    age: 19,
    major: 'Penerbangan'
  },
  {
    name: 'Miya',
    age: 21,
    major: 'Sistem Informasi'
  },
  {
    name: 'Margareth',
    age: 23,
    major: 'Bisnis Digital'
  }
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
function all() {
  for (const user of users) {
    console.log(user);
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
function store(user) {
  users.push(user) 
    console.log(users)
  ;
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
function update(index, user) {
 users.forEach((user, index)=> {
  if (index === 2 ){
    users[index] = 2
  }
 });
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
function destroy(index) {
  users.splice(index, 4)
    console.log(users);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Gold D roger",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Margareth");
  const deletedIndex = 4;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = {
  users,
  all,
  store,
  update,
  destroy
};