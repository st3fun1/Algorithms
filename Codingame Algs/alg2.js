<?php
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

$sentence = stream_get_line(STDIN, 1000 + 1, "\n");

// Write an action using echo(). DON'T FORGET THE TRAILING \n
// To debug (equivalent to var_dump): error_log(var_export($var, true));

$a = str_split($sentence);
$b = array_map(function($x){
    if(preg_match('/^[aeiou]+$/i',$x)) return $x . 'p' . $x;
    else return $x;
},$a);
$s = join("",$b);
echo($s);
?>
