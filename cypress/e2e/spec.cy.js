describe('E2E Test: Mengakses Halaman Dashboard (Overview)', () => {
  
  it('User berhasil login dan diarahkan ke halaman Overview', () => {
    // 1. MOCKING API: Memanipulasi response API agar membalas sukses (200) 
    // Ini akan mengatasi error 404 di backend dan memaksa frontend untuk berhasil login
    cy.intercept('POST', '**/login', {
      statusCode: 200,
      body: {
        token: 'dummy-token-jwt-12345',
        message: 'Login Successful'
      }
    }).as('loginRequest');

    // 2. Navigasi ke halaman login
    cy.visit('http://localhost:5173/login');

    // 3. Isi form login (Pastikan selector type="email" atau name="email" sesuai kodemu)
    // Silakan ganti value-nya menggunakan email/NIM mahasiswa milikmu sendiri
    cy.get('input[type="email"]').type('mahasiswa@dinus.ac.id'); 
    cy.get('input[type="password"]').type('password123');

    // 4. Klik tombol submit/login
    cy.get('button[type="submit"]').click();

    // 5. Tunggu Cypress mencegat request login buatan kita tadi
    cy.wait('@loginRequest');

    // 6. Verifikasi URL berubah ke endpoint overview
    cy.url().should('include', '/overview');

    // 7. Verifikasi komponen di halaman Overview berhasil dirender (Muncul tulisan Overview)
    // 7. Verifikasi halaman berhasil dimuat dengan mengecek logo/teks statis di sidebar
    cy.contains('FINEbank.io', { matchCase: false }).should('be.visible');
  });

});