/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
5 = ||||||||||||||||||||
4 = ||||||||||||||||
3 = ||||||||||||
2 = ||||||||
1 = ||||
*/

$(document).ready(function () {
    jQuery(function($){
        $('.table').footable({
            "columns": $.get('json/columns.json'),
            "rows": $.get('json/rows.json')
        });
    });
});