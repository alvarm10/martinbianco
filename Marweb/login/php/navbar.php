<nav class="nav navbar navbar-inverse navbar-fixed-top" role="navigation">
<div class="container-fluid">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <div class="mytitle">
             <a href="../../index.html" class="navbar-brand"><span class="in-title">In</span><span class="for-title">4</span><span class="all-title">all</span>
             </a>
         </div>
  </div>

  <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse navbar-ex1-collapse">
    <ul class="nav navbar-nav">
      <?php if(!isset($_SESSION["user_id"])):?>
      <li><a href="./registro.php">REGISTRO</a></li>
      <li><a href="./login.php">LOGIN</a></li>
    <?php else:?>
     <li><a href="../../MyDesignBiblio/index.php">DESIGN BIBLIO</a></li>
     <li><a href="../../login/sb-admin/index.html">ADMIN</a></li>
      <li><a href="http://www.in4all.es/login/php/logout.php">SALIR</a></li>
    <?php endif;?>
    </ul>

  </div><!-- /.navbar-collapse -->
</div>
</nav>