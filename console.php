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
try {
    //Read the configuration
    $config = include APP_PATH . "/app/config/config.php";
    $loader = new \Phalcon\Loader();

    // var_dump($config);
 
    /**
     * We're a registering a set of directories taken from the configuration file
     */
    $loader->registerDirs(
        array(
            $config->application->controllersDir,
            $config->application->pluginsDir,
            $config->application->libraryDir,
            $config->application->modelsDir,
            $config->application->tasksDir,
        )
    )->register();
    /**
     * The FactoryDefault Dependency Injector automatically register the right services providing a full stack framework
     */
    $di = new \Phalcon\DI\FactoryDefault\CLI();
    /**
     * Database connection is created based in the parameters defined in the configuration file
     */
    $di->set('db', function() use ($config) {
        return new \Phalcon\Db\Adapter\Pdo\Mysql(array(
            "host" => $config->database->host,
            "username" => $config->database->username,
            "password" => $config->database->password,
            "dbname" => $config->database->dbname
        ));
    });
    /**
     * If the configuration specify the use of metadata adapter use it or use memory otherwise
     */
    $di->set('modelsMetadata', function() use ($config) {
        if(isset($config->models->metadata)){
            $metaDataConfig = $config->models->metadata;
            $metadataAdapter = 'Phalcon\Mvc\Model\Metadata\\'.$metaDataConfig->adapter;
            return new $metadataAdapter();
        } else {
            return new Phalcon\Mvc\Model\Metadata\Memory();
        }
    });
    $console = new \Phalcon\CLI\Console();
    $console->setDI($di);
        // pass command-line arguments to handle
        $console->handle($_SERVER['argv']);
} catch (Phalcon\Exception $e) {
    echo $e->getMessage();
} catch (PDOException $e){
    echo $e->getMessage();
}

?>