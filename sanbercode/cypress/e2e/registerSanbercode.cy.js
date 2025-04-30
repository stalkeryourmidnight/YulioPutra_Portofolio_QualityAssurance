describe('Register Testing Sanbercode', () =>{
    /*fake identity */
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });
    it('coba membuat akun', () => {
        cy.visit('https://sanbercode.com/');
        cy.get('.ax-header-button > .axil-button > .button-text').click()
    })
    /*register 1/3 */
    it('coba membuat akun 1/3 - button Lanjutkan', () => {
        cy.visit('https://sanbercode.com/register');
        cy.get('#email').type('apasi@gmail.com')
        cy.get('#password').type('Ganteng123@')
        cy.get('#ulangPassword').type('Ganteng123@')
        cy.get('[id="1"] .cardSignup-button .btn-primary').click();

    })
    it('coba membuat akun 1/3 - button Batalkan', () => {
        cy.visit('https://sanbercode.com/register');
        cy.get('#email').type('apasi@gmail.com')
        cy.get('#password').type('Ganteng123@')
        cy.get('#ulangPassword').type('Ganteng123@')
        cy.get('#btnBatal').click();
    })
    it('coba membuat akun 1/3 - button sign in Google', () => {
        cy.visit('https://sanbercode.com/register');
        cy.get('#email').type('apasi@gmail.com')
        cy.get('#password').type('Ganteng123@')
        cy.get('#ulangPassword').type('Ganteng123@')
        cy.get('#btnSocialiteGoogle').click();
    })
    it('coba membuat akun 1/3 - button hubungi kami', () => {
        cy.visit('https://sanbercode.com/register');
        cy.get('.text-info').click();
    })

    /*register 2/3 */
    it('coba membuat akun 2/3 - button Lanjutkan', () => {
        /*lanjutan dari register 1/3 */
        cy.visit('https://sanbercode.com/register');
        cy.get('#email').type('apasi@gmail.com')
        cy.get('#password').type('Ganteng123@')
        cy.get('#ulangPassword').type('Ganteng123@')
        cy.get('[id="1"] .cardSignup-button .btn-primary').click();
        /* lanjut proses 2/3 */
        cy.get('#name').type('peter parker')
        cy.get('#no_hp').type('0877291324')
        cy.get('#telegram').type('apasi')
        cy.get('#provinsi').select('PROV. JAWA TENGAH')
        cy.get('#kokab').select('KOTA SEMARANG')
        cy.get('#year').type('2002-04-21')
        cy.get('#gender').type('Laki-laki')
        cy.get('#jenis_pekerjaan').select('Mahasiswa')
        cy.get('#pendidikanTerakhir').select('SMA (Sekolah Menengah Atas)')
        cy.get('#kelasPilihan').type('--daftar tanpa pilih kelas--')
        cy.get(':nth-child(11) > .form-control').type('Rekomendasi Teman')
        cy.get('#btnCollect').click()
    })
    it('coba membuat akun 2/3 - button sebelumnya', () => {
        /*lanjutan dari register 1/3 */
        cy.visit('https://sanbercode.com/register');
        cy.get('#email').type('apasi@gmail.com')
        cy.get('#password').type('Ganteng123@')
        cy.get('#ulangPassword').type('Ganteng123@')
        cy.get('[id="1"] .cardSignup-button .btn-primary').click();
        /* lanjut proses 2/3 */
        cy.get('#name').type('peter parker')
        cy.get('#no_hp').type('0877291324')
        cy.get('#telegram').type('apasi')
        cy.get('#provinsi').select('PROV. JAWA TENGAH')
        cy.get('#kokab').select('KOTA SEMARANG')
        cy.get('#year').type('2002-04-21')
        cy.get('#gender').type('Laki-laki')
        cy.get('#jenis_pekerjaan').select('Mahasiswa')
        cy.get('#pendidikanTerakhir').select('SMA (Sekolah Menengah Atas)')
        cy.get('#kelasPilihan').type('--daftar tanpa pilih kelas--')
        cy.get(':nth-child(11) > .form-control').select('Rekomendasi Teman')
        cy.get('#btnCollect').click()
    })
    it('coba membuat akun 2/3 - hubungi kami', () => {
        /*lanjutan dari register 1/3 */
        cy.visit('https://sanbercode.com/register');
        cy.get('#email').type('apasi@gmail.com')
        cy.get('#password').type('Ganteng123@')
        cy.get('#ulangPassword').type('Ganteng123@')
        cy.get('[id="1"] .cardSignup-button .btn-primary').click();
        /* proses 2/3 */
        cy.get('#name').type('peter parker')
        cy.get('#no_hp').type('0877291324')
        cy.get('#telegram').type('apasi')
        cy.get('#provinsi').select('PROV. JAWA TENGAH')
        cy.get('#kokab').select('KOTA SEMARANG')
        cy.get('#year').type('2002-04-21')
        cy.get('#gender').type('Laki-laki')
        cy.get('#jenis_pekerjaan').select('Mahasiswa')
        cy.get('#pendidikanTerakhir').select('SMA (Sekolah Menengah Atas)')
        cy.get('#kelasPilihan').type('--daftar tanpa pilih kelas--')
        cy.get(':nth-child(11) > .form-control').type('Rekomendasi Teman')
        cy.get('#btnCollect').click()
    })
     /*proses klik button hubungi kami di 2/3 register */
     it('coba membuat akun 2/3 - hubungi kami', () => {
        /*lanjutan dari register 1/3 */
        cy.visit('https://sanbercode.com/register');
        cy.get('#email').type('apasi@gmail.com')
        cy.get('#password').type('Ganteng123@')
        cy.get('#ulangPassword').type('Ganteng123@')
        cy.get('[id="1"] .cardSignup-button .btn-primary').click();
        /* lanjut proses 2/3 */
        cy.get('#name').type('peter parker')
        cy.get('#no_hp').type('0877291324')
        cy.get('#telegram').type('apasi')
        cy.get('#provinsi').select('PROV. JAWA TENGAH')
        cy.get('#kokab').select('KOTA SEMARANG')
        cy.get('#year').type('2002-04-21')
        cy.get('#gender').type('Laki-laki')
        cy.get('#jenis_pekerjaan').select('Mahasiswa')
        cy.get('#pendidikanTerakhir').select('SMA (Sekolah Menengah Atas)')
        cy.get('#kelasPilihan').type('--daftar tanpa pilih kelas--')
        cy.get(':nth-child(11) > .form-control').select('Rekomendasi Teman')
        cy.get('#btnCollect').click()
    })

       /*register 3/3 */
       it('coba membuat akun 3/3 - button Lanjutkan', () => {
        /*lanjutan dari register 1/3 */
        cy.visit('https://sanbercode.com/register');
        cy.get('#email').type('apasi@gmail.com')
        cy.get('#password').type('Ganteng123@')
        cy.get('#ulangPassword').type('Ganteng123@')
        cy.get('[id="1"] .cardSignup-button .btn-primary').click();
        /* lanjutan dari 2/3 */
        cy.get('#name').type('peter parker')
        cy.get('#no_hp').type('0877291324')
        cy.get('#telegram').type('apasi')
        cy.get('#provinsi').select('PROV. JAWA TENGAH')
        cy.get('#kokab').select('KOTA SEMARANG')
        cy.get('#year').type('2002-04-21')
        cy.get('#gender').type('Laki-laki')
        cy.get('#jenis_pekerjaan').select('Mahasiswa')
        cy.get('#pendidikanTerakhir').select('SMA (Sekolah Menengah Atas)')
        cy.get('#kelasPilihan').type('--daftar tanpa pilih kelas--')
        cy.get(':nth-child(11) > .form-control').select('Rekomendasi Teman')
        cy.get('#btnCollect').click()
        /*proses 3/3 */
        cy.get('#btnKirim').click()
    })
})