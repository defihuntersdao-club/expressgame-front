<?php
$d = __DIR__."/";

$item = $_GET[item];

$item = basename($item);

$f = $item.".html";
if(file_exists($f))
{
    $a = file_get_contents($f);
    print $a;
}
else
{
$h = opendir($d);
while($f = readdir($h))
{
    if($f == ".." || $f == ".")continue;

    $tf = $d.$f;
    if(is_dir($tf))continue;
    $t = pathinfo($tf);
    if($t[extension] == "html")
    {
	//$o = $f;
	$l[$f] = "?item=$t[filename]";
    }
}
//print_r($l);
    foreach($l as $f=>$link)
    {
	print "<a href=$link>$f</a> \n";
    }
}
?>