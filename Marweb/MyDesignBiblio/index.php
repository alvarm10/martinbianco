<!-- Codigo html de referencia de Diseño BOOTSTRAP . Alvaro Martin Del Amo MB 2016 -->
<?php
 session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
 print "<script>alert(\"Acceso invalido! Inicia sesion para continuar\");window.location='../login/login.php';</script>";
}

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Dinem.es</title>
        <meta name="viewport" content="width=device-width. user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                   
                    <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
            <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
            
            <link rel="stylesheet" href="estilos.css">
            <script src="access.php"></script>
            <script></script>
           
    </head>
    
    <body ng-app="">
       
      <!--Navbar -->
         <?php include "navbar.html"; ?>
      <!-- NAVBAR-->
            
           
           <br>
           <div class="well row">
               <div class="col-md-3">
                  <h3 class="visible-xs pull-right">"Biblioteca de diseño"</h3>
                   <h2 class="hidden-xs">"Biblioteca de diseño"</h2>
                   <br>
                   <span><a href="../www.romanolivet.com/index.html">ROMAN OLIVET</a></span>
                   
                   
               </div>
           </div>
             <!-- CONT PRINCIPAL -->
             
              <!-- BOOTSTRAP DESIGN BIBLIO -->
            <div class="container"  ng-hide="">
         
            <!-- Fila principal-->
            <section class="container main row">
               <article class="col-xs-12 col-sm-8 col-md-9 ">
                    <h3>En Construcción</h3>
                   <p><strong>Disculpad las molestias </strong><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eligendi provident iusto ducimus aliquid nemo fugit atque sed saepe perferendis, debitis maxime at nulla modi sit ratione non est sunt!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptate vero impedit doloremque optio officiis, cum dolor necessitatibus inventore fugiat! Maxime enim obcaecati dolorum, sit ab dicta voluptates tempora est!</p><a class="btn btn-primary visible-md-block visible-lg-inline hidden-print ">Boton</a>
                   
               </article>
               
               <!-- SIDEBAR -->
               <aside class="visible-md visible-lg col-xs-4 col-sm-4 col-md-3">
                    <h3>Sidebar</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, deleniti. Deleniti officia nihil nobis voluptate, atque at nostrum, inventore perferendis maiores doloremque molestias. Saepe excepturi voluptatum perspiciatis praesentium, illum enim!</p>
               </aside>
            </section>
            <!-- Fila principal-->
             
            <!--COLUMNAS -->
            <div class="container row">
                <div class="color1 col-xs-6 col-sm-6 col-md-3 text-center">
                <h3 class="text-warning bg-primary"><u>Columna</u></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam consectetur expedita dolores pariatur dolor fugit officiis asperiores ea animi inventore, iste provident perspiciatis voluptas, voluptates qulor sit amet, consectetur adipisicing elit. Ut voluptate deleniti iure numquam amet ihil iusto, perferendis sapiente fuga magni repellat eos cum libero, dolorem tempore. A harum vero deserunt qui praesentium amet.Vel quo voluptates odio tempore ipsa, quod accusantium quos dolorem, laudantium ratione repellendus officiis ducimus deleniti suscipit sequi soluta dolore molestiae. Rem!</p>                        
                </div>
                <div class="col-xs-6 col-sm-6 col-md-3 text-justify">
                <h3 class="text-primary bg-info"><u>Columna</u></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit expedita et, dolores consequatur neque aspernatur nesciunt natus vero. Debitis est nulla eaque eos quis quam! Natus, odio vero amet tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facere culpa eius libero nam placeat, dels deleniti veniam. Dolores minima iusto veritatis dignissimos, dolor fuga voluptates a placeat sit earum.</p>    
                </div>
                <div class="clearfix visible-sm-block"></div>
                <div class="color1 col-xs-12 col-sm-6 col-md-3">
                <h3 class="text-danger bg-danger"><b><u>Columna</u></b></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, rem in optio aliquid? Totam eum amet, quibusdam consectetur numquam dignissimos. Tempore amet ipsa voluptas, pariatur nostrum iusto quaerat dolorem fugit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit id quas aspernatur iste sed quisquam dolores molestiae, eaque, quibusdam tempora dolor, aperiam itaque dolore repellendus accusamus porro quae officiis, odit.</p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                <h3 class="text-info bg-success"><em>Columna</em></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ipsa, repellendus consequuntur sed veniam reprehenderit omnis architecto eveniet itaque perspiciatis animi labore deserunt odio, vero non numquam assumenda ut est?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugiat aliquid nostrum voluptas soluta ipsa inventore deleniti in error non sequi at consectetur, consequatur et, aperiam, sint praesentium maiores minus?</p>
                </div>
            </div>
            <!--COLUMNAS -->
            
            <!--Cita -->
            <div class="container row">
                <blockquote >
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fuga, laboriosam fugiat quas eius obcaecati perspiciatis at dolores consequuntur nihil, pariatur doloribus, error voluptatem dolorum nam animi! Eligendi alias, odit.</p>
                   <footer>MartinBianco<cite title="Fuente"> En Dinem.es</cite></footer>
                </blockquote>
            </div> 
             <!--Cita -->
             
            <!-- formulario -->
            <div class="container">
               <br>
                <form action="" class="">
                   <fieldset>
                    <div class="form-group has-success">
                        <label class="control-label" for="nombre">Nombre:</label>
                        <input class="form-control" id="nombre" type="text" placeholder="Nombre:">
                    </div>
                    <div class="form-group has-warning">
                        <label for="option">Elige una opcion: </label>
                        <select class="form-control" name="" id="option">
                            <option value="">Opción #1</option>
                            <option value="">Opción #2</option>
                            <option value="">Opción #3</option>
                            <option value="">Opción #4</option>
                            <option value="">Opción #5</option>
                         </select>
                    </div>
                    <div class="form-group has-error">
                        <label class="control-label" for="mensaje">Mensaje: </label>
                        <textarea class="form-control" id="mensaje" placeholder="Escribe aqui tu mensaje: "></textarea>
                    </div>


                    <button class="btn btn-primary">Enviar</button>
                    </fieldset>
                </form>
            </div>
            <!-- formulario -->
            
            <!-- formulario en linea -->
            <div class="container">
               <br>
                <form action="" class="form-inline">
                    <div class="form-group">
                        <label class="sr-only" for="nombre">Nombre:</label>
                        <input class="form-control" id="nombre" type="text" placeholder="Nombre:">
                    </div>
                    
                    <div class="form-group">
                        <div class="input-group">
                            <label class="sr-only" for="Correo">Correo: </label>
                            <div class="input-group-addon">@</div>
                            <input type="text" class="form-control" id="correo" placeholder="Correo:">
                        </div>
                    </div>
                    
                    <div class="checkbox">
                        <label> 
                        <input type="checkbox" name="" id=""> Recuerdame
                        </label>
                    </div>

                    <button class="btn btn-primary">Enviar</button>
                </form>
            </div> <br>
            <!-- formulario en linea -->
            
            <!-- BOTONES -->
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-3">
                        <button class="btn btn-xs btn-block btn-default">Default</button>
                        <button class="btn btn-sm btn-block btn-primary">Primary</button>
                        <button class="btn btn-lg btn-block btn-success">Success</button>
                        <button class="btn btn-sm btn-block btn-info">Info</button>
                        <button class="btn btn-md btn-block btn-warning">Warning</button>
                        <button class="btn btn-lg btn-block btn-danger">Danger</button>
                        <button class="btn btn-lg btn-block btn-link">Link</button>
                    </div>
                    <div class="col-md-6 col-sm-3">
                        <a href="#" class="btn btn-default">Default</a>
                        <a href="#" class="btn btn-primary">Primary</a>
                        <a href="#" class="btn btn-success">Success</a>
                        <a href="#" class="btn disabled btn-info">Info</a>
                        <a href="#" class="btn disabled btn-warning">Warning</a>
                        <a href="#" class="btn btn-danger">Danger</a>
                        <a href="#" class="btn btn-link">Link</a>
                    </div>
                </div>
                <br>
                <a class="btn btn-primary visible-md-block visible-lg-inline hidden-print ">Boton</a><br>
            </div>
            <!-- BOTONES -->
                                                        
            <!-- TRATAMIENTO DE IMAGENES BOOTSTRAP --> <br>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-3"><img src="http://lorempixel.com/500/500/" class="img-responsive img-rounded" alt=""></div>
                    <div class="col-sm-12 col-md-3"><img src="http://lorempixel.com/500/500/" class="img-responsive img-circle" alt=""></div>
                    <div class="col-sm-12 col-md-3"><img src="http://lorempixel.com/500/500/" class="img-responsive img-thumbnail" alt=""></div>
                </div>
            </div>
            <!-- TRATAMIENTO DE IMAGENES BOOTSTRAP --> <br>

            <!-- Clases auxiliares-->
            <div class="container col-md-12 col-sm-12">
                <button class="btn btn-success pull-right">Boton</button>
                <button class="btn btn-success pull-left">Boton</button>
                </div>
            <!-- Clases auxiliares-->
           
            <!-- iconos y bootstrap grphics -->
            <div class="container titulos">
                    <h1 class="hidden-xs hidden-sm"><span class="glyphicon glyphicon-th" ></span> Titulo de PRUEBA h1</h1>
                    <h2 class="hidden-xs"><span class="glyphicon glyphicon-user"></span> Titulo de PRUEBA h2</h2>
                    <h3><span class="glyphicon glyphicon-cog"></span> Titulo de PRUEBA h3</h3>
                    <h4><span class="glyphicon glyphicon-backward"></span> Titulo de PRUEBA h4</h4>
                    <h5><span class="glyphicon glyphicon-globe"></span> Titulo de PRUEBA h5</h5>
                    <h6><span class="glyphicon glyphicon-hd-video"></span> Titulo de PRUEBA h6</h6>
                   <button class="btn btn-info"><span class="glyphicon glyphicon-hand-right"></span> ME mola</button>
                    <button class="btn btn-warning"><span class="glyphicon glyphicon-off"></span> APAAGAAA</button>
                </div>
            <!-- iconos y bootstrap grphics -->
            
            <!-- thumbnails -->
            <div class="container row">
              <div class="col-sm-6 col-md-8 col-lg-12">
                <div class="thumbnail">
                  <img src="http://lorempixel.com/900/500/" class="img-responsive img-rounded" alt="">
                  <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quidem accusantium quos facere, iure, eligendi deserunt alias reprehenderit quas voluptas velit repellat laborum doloribus ullam? Dolor tempore error, repellendus voluptate.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                  </div>
                </div>
              </div>
            </div> 
            <!-- thumbnails -->
            
            <!-- DropDown -->
            <div class="container dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownmenu1" data-toggle="dropdown" aria-extended="true">
                    Dropdown
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownmenu1">
                    <li role="presentation" class="dropdown-header">Header</li>
                    <li class="divider"></li>
                    <li role="presentation"><a role="item" href="#">item #1</a></li>
                    <li role="presentation"><a role="item" href="#">item #2</a></li>
                    <li role="presentation"><a role="item" href="#">item #3</a></li>
                    <li class="disabled" role="presentation"><a role="item" href="#">item #4</a></li>
                </ul>
            </div><br><br><br><br><br><br><br>
            <!-- DropDown -->
                      
            <!-- Gruops de botones -->
            <div class="container row">
                <div class="btn-group btn-group-lg">
                    <button class="btn btn-default">Derecha</button>
                    <button class="btn btn-default">Centro</button>
                    <button class="btn btn-default">Izquierda</button>
                </div>
                <div class="btn-group btn-group-justify btn-group-xs">
                    <button class="btn btn-default">1</button>
                    <button class="btn btn-default">2</button>
                    <button class="btn btn-default">3</button>
                </div>
               <br>
               <div class="btn-group-vertical btn-group-sm">
                    <button class="btn btn-default">XXX</button>
                    <button class="btn btn-default">OOO</button>
                    <button class="btn btn-default">+++</button>
                </div>
                <div class="btn-group-vertical btn-group-md">
                    <button class="btn btn-default">1</button>
                    <button class="btn btn-default">2</button>
                    <button class="btn btn-default">3</button>
                </div>
                    <br><br>
                    
                <div class="btn-group dropup">
                            <button class="btn btn-primary">Texto</button>
                            <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                Accion <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                               <li><a href="#">items#1</a></li>
                               <li><a href="#">items#2</a></li>
                               <li><a href="#">items#3</a></li>
                               <li><a href="#">items#4</a></li>
                               <li><a href="#">items#5</a></li>
                            </ul>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-md-12">
                        <div class="btn-group">
                            <button class="btn btn-primary">Texto</button>
                            <button class="btn btn-primary" >
                                Accion </button>
                            <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                               <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                               <li><a href="#">items#1</a></li>
                               <li><a href="#">items#2</a></li>
                               <li><a href="#">items#3</a></li>
                               <li><a href="#">items#4</a></li>
                               <li><a href="#">items#5</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br><br><br><br><br><br><br><br>
            </div>
            <!-- Gruops de botones -->
                      
            <!-- Grupos de input -->
            <div class="container row">
               <br>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group">
                           <span class="input-group-addon">Correo:</span>
                            <input type="text" class="form-control" placeholder="QUEPAI">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                           <span class="input-group-addon">$</span>
                            <input type="text" class="form-control" placeholder="Precio">
                            <span class="input-group-addon">.00</span>
                        </div>
                    </div>
                
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">
                        <input type="checkbox">
                        </span>
                        <input type="text" class="form-control" placeholder="Textoooooooo">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">
                        <input type="radio" name="radio1">
                        </span>
                        <input type="text" class="form-control" placeholder="Textoooooooo">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                       <input type="text" class="form-control" placeholder="Textoooooooo">
                        <span class="input-group-addon">
                        <input type="radio" name="radio1">
                        </span>
                    </div>
                </div>
                
                
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-btn">
                            <button class="btn btn-success">Boton</button></span>
                        <input type="text" class="form-control">
                    </div>
                </div>
                </div>
            </div>
            <!-- Grupos de input -->    
                      
            <!-- Grupos de Navs y tipos -->               
            <div class="container row">
                <div class="col-md-12">
                    <ul class="nav nav-tabs">
                        <li class="active" role="presentation"><a href="#">irem #1</a></li>
                        <li role="presentation"><a href="#">irem #2</a></li>
                        <li role="presentation"><a href="#">irem #3</a></li>
                    </ul>
                </div>
                <br><br> 
            </div>
            
            <!-- PROGRESS BAR -->                           
            <div class="container row">
               <br>
                <div class="col-md-4">
                    <div class="progress">
                        <div class="progress-bar progress-bar-success" role="progress.bar" style="width:19%;">
                            <span class="sr-only">25% Completado</span>
                            20% Completado
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" style="width:86%; min-width: 10%;">
                            <span class="sr-only">25% Completado</span>
                            87.65% Completado
                        </div>
                    </div>
                     <div class="progress">
                        <div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" style="width:40%; min-width: 10%;">
                            <span class="sr-only">25% Completado</span>
                            37.75% Completado
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-danger" role="progressbar" style="width:100%;">
                            <span class="sr-only">25% Completado</span>
                            100% Completado
                        </div>
                    </div>
                    <!-- Combinadas -->
                    <div class="progress">
                        <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style="width:16%">
                            <span class="sr-only">
                            </span>
                        
                    </div>
                     <div class="progress">
                         <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style="width:26%">
                            <span class="sr-only">
                            </span>
                         </div>
                         <div class="progress">
                         <div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" style="width:85%">
                            <span class="sr-only">
                            </span>
                         </div>
                          ->90% Completado 
                         </div>
                     </div> 
                    </div>
                    <!-- Combinadas -->
                </div>
            </div> 
            <!-- PROGRESS BAR -->  
            
            <!-- Paneles -->
            <div class="container row">
                <div class="panel panel-primary">
                    <div class="panel-heading">Encabezado</div>
                    <div class="panel-body">Lorem ipsum dolor sit amet, camet soluta incidunt. Eum, assumenda, modi!</div>
                </div>
                <div class="panel panel-danger">
                    <div class="panel-heading">Encabezado</div>
                    <div class="panel-body">Lorem ipsum dolor sit amet, camet soluta incidunt. Eum, assumenda, modi!</div>
                    <div class="panel-footer">Pie de panel</div>
                </div>
                <div class="panel panel-warning">
                    <div class="panel-heading">Encabezado</div>
                    <div class="panel-body">Lorem ipsum dolor sit amet, camet soluta incidunt. Eum, assumenda, modi!</div>
                    <div class="panel-footer">Pie de panel</div>
                </div>
            <br></div>
            <!-- Paneles -->   
            
            <!-- Ventanas emergente MODAL --> 
            <div class="container"><a href="#ventana1" class="btn btn-primary btn-lg" data-toggle="modal">boton #1</a>
            <a href="#ventana2" class="btn btn-primary btn-lg" data-toggle="modal">boton #1</a>
            
            <div class="modal fade" id="ventana1">
                <div class="modal-dialog">
                    <div class="modal-content">
                      
                       <!-- Header de la ventana -->
                        <div class="modal-header">
                            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title">Encabezado de Ventana 1</h4>
                            
                           <!-- Contenido de la ventana -->
                           <div class="modal-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia alias modi quis omnis aperiam earum dolore distinctio ipsa at expedita officia repellendus cum laborum et asperiores, optio illum natus reiciendis.</p>
                           </div>
                           <!-- Fo0ter de la ventana -->
                           <div class="modal-footer">
                               <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                               <button type="button" class="btn btn-primary" >Guardar Cambios</button>
                           </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="ventana2">
                <div class="modal-dialog">
                    <div class="modal-content">
                      
                       <!-- Header de la ventana -->
                        <div class="modal-header">
                            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title">Encabezado de Ventana 2</h4>
                            
                           <!-- Contenido de la ventana -->
                           <div class="modal-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia alias modi quis omnis aperiam earum dolore distinctio ipsa at expedita officia repellendus cum laborum et asperiores, optio illum natus reiciendis.</p>
                           </div>
                           <!-- Fo0ter de la ventana -->
                           <div class="modal-footer">
                               <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                               <button type="button" class="btn btn-primary" >Guardar Cambios</button>
                           </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <br><br></div>
            <!-- Ventanas emergente MODAL --> 
            
            <!-- COLLAPSE ACORDEON -->  
            <div class="container">
                <a href="#seccion" class="btn btn-primary" data-toggle="collapse">Mostrar / Ocultar</a>
                <div class="collapse" id="seccion">
                    <br>
                    <div class="well">
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus autem quisquam aut excepturi fugiat itaque dolor alias illo voluptates laborum dignissimos cum, molestias, molestiae, ratione beatae mollitia accusantium quaerat eligendi?</p>
                    </div>
                </div>
                <br><br>
                            <!-- acordeon-->
                <div class="panel-group" id="acordeon" role="tablist">
                    <div class="panel panel-success">
                        <div class="panel-heading" role="tab" id="heading1">
                           <h4 class="panel-title"> 
                            <a href="#collapse1" data-toggle="collapse" data-parent="#acordeon">
                                Encabezado1
                            </a>
                            </h4>   
                        </div>
                        <div id="collapse1" class="panel-collapse collapse in">
                        <div class="panel-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vitae nostrum odit praesentium minima, sapiente voluptatem voluptates officia eos voluptate quaerat. Tempora rerum quia aliquam sapiente, temporibus omnis ducimus odit.</p></div>
                        </div>
                        
                        <div class="panel panel-primary">
                        <div class="panel-heading" role="tab" id="heading2">
                           <h4 class="panel-title"> 
                            <a href="#collapse2" data-toggle="collapse" data-parent="#acordeon">
                                Encabezado2
                            </a>
                            </h4>   
                        </div>
                        <div id="collapse2" class="panel-collapse collapse ">
                        <div class="panel-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vitae nostrum odit praesentium minima, sapiente voluptatem voluptates officia eos voluptate quaerat. Tempora rerum quia aliquam sapiente, temporibus omnis ducimus odit.</p></div>
                        </div>
                        </div>
                        
                        <div class="panel panel-primary">
                        <div class="panel-heading" role="tab" id="heading3">
                           <h4 class="panel-title"> 
                            <a href="#collapse3" data-toggle="collapse" data-parent="#acordeon">
                                Encabezado3
                            </a>
                            </h4>   
                        </div>
                        <div id="collapse3" class="panel-collapse collapse ">
                        <div class="panel-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vitae nostrum odit praesentium minima, sapiente voluptatem voluptates officia eos voluptate quaerat. Tempora rerum quia aliquam sapiente, temporibus omnis ducimus odit.</p></div>
                        </div>
                        </div>
                    </div>
                </div>           
        
           </div>
            <!-- COLLAPSE ACORDEON --> 
            
            <!-- TABS DINAMICAS -->
            <div class="container">
               <div class="row">
                <div class="col-md-5">
                    <div role="tabpanel">
                       
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#seccion1" aria-controls="seccion1" data-toggle="tab" role="tab">Seccion#1</a></li>
                            <li role="presentation">               <a href="#seccion2" aria-controls="seccion2" data-toggle="tab" role="tab">Seccion#2</a></li>
                            <li role="presentation" >               <a href="#seccion3" aria-controls="seccion3" data-toggle="tab" role="tab">Seccion#3</a></li>
                        </ul>
                        
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane" id="seccion1">
                               <h3>Seccion 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptatum o consectetur ad excepturi soluta quas animi. Dolori</p>
                            </div>
                        </div>
                        
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane" id="seccion2">
                               <h3>Seccion 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ciis tempore quod, sit fugiat qui enim tempora voluptate sed!</p>
                            </div>
                        </div>
                        
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane" id="seccion3">
                               <h3>Seccion 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptatum odit, quasi vitae consectetur ad excepturi soluta quas animi. Doloribus, officiis tempore quod, sit fugiat qui enim tempora voluptate sed!</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
             </div>
            <br><br></div>
            <!-- TABS DINAMICAS -->
            
            <!-- SLIDESHOW -->
          <h3><a href="galeria.html">SLIDESHOWS Y GALERIA DE IMAGENES</a></h3>
            
            <!-- SLIDESHOWs -->
        </div>
            
            
             <!-- FOUNDATION DESIGN BIBLIO -->
                
         <!--Pie de página -->
         <footer>
                <div class="container" >
                    <h3>Alvaro Martin &copy; Dinem.es 2016</h3>
                </div>
            </footer>  
         <!--Pie de página -->
         
                       
        <!-- Latest compiled and minified JavaScript -->
            <script src="http://code.jquery.com/jquery-latest.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous">
            </script>
        <!-- Latest compiled and minified JavaScript -->
        
        
    </body>
    
</html>