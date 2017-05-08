<?php
namespace frontend\controllers;

use Yii;
use yii\web\Controller;
use \common\services\ShellInterpreter;
/**
 * Shell controller
 */
class ShellController extends Controller
{
    /**
     * @inheritdoc
     */

    protected $shellInterpreter;

    public function __construct($id, $module, ShellInterpreter $shellInterpreter, $config = [])
    {
        $this->shellInterpreter = $shellInterpreter;
        parent::__construct($id, $module, $config);
    }

    public function actionExec()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $cmd = Yii::$app->request->post('cmd');
        $run = $this->shellInterpreter->liveExec($cmd);
        if($run['exit_status'] === 0) {
            return $run;
        } else {
            throw new \Exception;
        }
    }
}
