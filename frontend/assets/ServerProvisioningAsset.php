<?php

namespace frontend\assets;

use yii\web\AssetBundle;

class ServerProvisioningAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
    ];
    public $js = [
        'js/provision-server.js'
    ];
    public $depends = [
        'frontend\assets\AppAsset',
    ];
}
