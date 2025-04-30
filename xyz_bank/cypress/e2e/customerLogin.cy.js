describe ('Testing Halaman Customer Login',() => {
    it ('Test Halaman Utama Login', () =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('.borderM > :nth-child(1) > .btn').click()
  
    })
    it ('Test Halaman Customer Login pada Fitur Deposit', () =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click()
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('.form-control').type('14000')
        cy.get('form.ng-dirty > .btn').click()
    })
    it('Test Halaman Customer Login pada Fitur Withdrawl', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        /* Masuk ke halaman akun dan klik Deposit */
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
        cy.get('[ng-class="btnClass2"]').click();
        /* Isi amount di form deposit dan klik submit */
        cy.contains('Amount to be Deposited')
          .parents('.form-group')
          .within(() => {
              cy.get('input.form-control').type('14000');
          });
        cy.get('form.ng-dirty > .btn').click();
        /* Klik tombol Withdrawl */
        cy.get('[ng-class="btnClass3"]').click();
        /* Isi amount di form withdrawl dan klik submit */
        cy.contains('Amount to be Withdrawn')
          .parents('.form-group')
          .within(() => {
              cy.get('input.form-control').type('1000');
          });
        cy.get('form.ng-dirty > .btn').click();
    });
    it ('Test Halaman Customer Login pada Fitur Withdrawl melebihi batas nilai deposit', () =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        /* Masuk ke halaman akun dan klik tombol deposit*/
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
        cy.get('[ng-class="btnClass2"]').click();
        /* Isi amount di form deposit dan klik submit */
        cy.contains('Amount to be Deposited')
          .parents('.form-group')
          .within(() => {
              cy.get('input.form-control').type('14000');
          });
        cy.get('form.ng-dirty > .btn').click();
        /* Klik tombol Withdrawl */
        cy.get('[ng-class="btnClass3"]').click();
        /* Isi amount di form withdrawl dan klik submit */
        cy.contains('Amount to be Withdrawn')
          .parents('.form-group')
          .within(() => {
              cy.get('input.form-control').type('15000');
          });
        cy.get('form.ng-dirty > .btn').click();
    })
    it ('Test Halaman Customer Login pada Fitur Transactions', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        /* Masuk ke halaman akun */
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
        /* Proses Deposit dan Withdrawl agar terlihat pada riwayat transaksi */
        cy.get('[ng-class="btnClass2"]').click();
        cy.contains('Amount to be Deposited')
          .parents('.form-group')
          .within(() => {
              cy.get('input.form-control').type('14000');
          });
        cy.get('form.ng-dirty > .btn').click();
        cy.get('[ng-class="btnClass3"]').click();
        cy.contains('Amount to be Withdrawn')
          .parents('.form-group')
          .within(() => {
              cy.get('input.form-control').type('1000');
          });
        cy.get('form.ng-dirty > .btn').click();
        /* Proses Transaction */
        cy.get('[ng-class="btnClass1"]').click()
    })
   
    it ('Menampilkan tampilan yang sesuai jika customer belum memiliki rekening', () => {
         /* Buka halaman Add Customer */
         cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');
         cy.get(':nth-child(1) > .form-control').type('Yulio');
         cy.get(':nth-child(2) > .form-control').type('Putra');
         cy.get(':nth-child(3) > .form-control').type('110234');
         cy.get('form.ng-dirty > .btn').click({force: true});
         /* Kembali ke halaman login utama dan klik Customer Login*/
         cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
         cy.get('button[ng-click="customer()"]').click();
 
         /* Pilih nama customer yang baru ditambahkan */
         cy.get('#userSelect').select('Yulio Putra');
         cy.get('button[type="submit"]').click();
         cy.contains('Please open an account with us.').should('be.visible');
    })    
})