$(() => {
  $('.tooltipped').tooltip({ delay: 50 })
  $('.modal').modal()

  firebase.initializeApp(varConfig);

 //TODO:Fierbase obsevador del cambio de estado
 firebase.auth().onAuthStateChanged(user=>{
    if(user){
      $('#btnInicioSesion').text('Salir');
       if(user.photoURL){
         $('#avatar').attr('src',user.photoURL)
       }else{
        $('#avatar').attr('src','imagenes/usuario_auth.png')
       }
    }else{
      $('#btnInicioSesion').text('Iniciar Sesion');
      $('#avatar').attr('src','imagenes/usuario.png')
    }
 })

  $('#avatar').click(()=>{
    firebase.auth().signOut()
    .then(()=>{
      $('#avatar').attr('src','imagenes/usuario.png')
      Materialize.toast('SignOut correcto',4000)
    })
    .catch(error=>{
      Materialize.toast(`Error al realizarSignOut ${error}`,4000)
    })
  })
  
});
