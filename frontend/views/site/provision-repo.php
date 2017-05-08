<?php

use yii\helpers\Url;
use common\services\ShellInterpreter;

/* @var $this yii\web\View */

$this->title = 'My Yii Application';

// $shell = new ShellInterpreter;
// $run = $shell->liveExec('ping -c 10 google.ca');
?>
<div class="site-index">
    <div class="jumbotron">
        <h1>Repo Provisioning</h1>
    </div>

    <div class="body-content">
        <a id="js-shell-exec" href="<?php echo Url::to('/shell/exec') ?>">
            Provision Repo
        </a>
    </div>

    <div id="js-content">
    </div>
</div>
