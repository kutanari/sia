#!/usr/bin/php
<?php
/**
 * @author Fery Putra Tarigan <kutanaridesain@gmail.com>
 * @link http://kutanari.com, http://kutanaridesain.com
 * @since 2015
 * @license MIT License
 */

error_reporting(E_ALL);
set_time_limit(0);

define('APP_PATH', realpath('.'));

// read the configuration
$config = include APP_PATH . "/app/config/config.php";

// incldue the loader
require APP_PATH . "/app/config/loader.php";

// automatically register the right service providing a full stack framework
$di = new \Phalcon\DI\FactoryDefault();

// include application service
require APP_PATH . "/app/config/services.php";


?>