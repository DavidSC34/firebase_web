$(() => {
  const objAuth = new Autenticacion()

  $('#btnRegistroEmail').click(() => {
    const nombres = $('#nombreContactoReg').val()
    const email = $('#emailContactoReg').val()
    const password = $('#passwordReg').val()
    objAuth.crearCuentaEmailPass(email, password, nombres)
  })

  $('#btnInicioEmail').click(() => {
    const email = $('#emailSesion').val()
    const password = $('#passwordSesion').val()
    objAuth.autEmailPass(email, password)
  })

  $('#authGoogle').click(() => objAuth.authCuentaGoogle())

  $('#authFB').click(() => objAuth.authCuentaFacebook())

  // $("#authTwitter").click(() => objAuth.authCuentaFacebook());

  $('#btnRegistrarse').click(() => {
    $('#modalSesion').modal('close')
    $('#modalRegistro').modal('open')
  })

  $('#btnInicioSesion').click(() => {
    const user = firebase.auth().currentUser
    if(user){
      $('#btnInicioSesion').text('Iniciar Sesion');
      return firebase.auth().signOut()
      .then(()=>{
        $('#avatar').attr('src','imagenes/usuario.png')
        Materialize.toast(`SingOut correcto`,4000)
      }).catch(error=>{
        Materialize.toast(`Error al realizar SignOut =>${error}`,4000)
      })
    }
    $('#emailSesion').val('')
    $('#passwordSesion').val('')
    $('#modalRegistro').modal('close')
    $('#modalSesion').modal('open')
  })
})
