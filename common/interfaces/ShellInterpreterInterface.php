<?php
namespace common\interfaces;

interface ShellInterpreterInterface {
	public function liveExec(string $cmd) : array;
}