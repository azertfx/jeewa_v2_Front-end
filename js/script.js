$(document).ready(function(){
	$("#h3_para1").click(function(){
		$("#para1").slideToggle("slow");
		$("#para2").addClass("changee");
		$("#para3").addClass("changee");
		
		});
		
	$("#h3_para2").click(function(){
		$("#para2").slideToggle("slow");
		$("#para1").addClass("changee");
		$("#para3").addClass("changee");
		
		});
		
	$("#h3_para3").click(function(){
		$("#para3").slideToggle("slow");
		$("#para1").addClass("changee");
		$("#para2").addClass("changee");
		
		});

})