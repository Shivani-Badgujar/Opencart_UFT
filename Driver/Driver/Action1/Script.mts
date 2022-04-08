
Services.StartTransaction "Mod_2"


mrowcount=datatable.GetSheet("Action1").GetRowCount
'msgbox mrowcount

For i = 1  To mrowcount Step 1
	Datatable.SetCurrentRow(i)
	
	Modexe =  Datatable("ModuleExe","Action1")
	
	'msgbox Modexe
	If Modexe="Y" Then
		Modid=Datatable("ModuleID","Action1")
		'msgbox Modid
		
		trowcount=datatable.GetSheet("Action2").GetRowCount
		
		'msgbox trowcount
		
		For j = 1 To trowcount Step 1
			Datatable.SetCurrentRow(j)
			If Modid=Datatable("ModuleID","Action2") and Datatable("TestCaseExe","Action2") = "Y"  Then
			testcaseid=Datatable("TestcaseId","Action2")	
			'msgbox testcaseid
			
			tsrowcount=Datatable.GetSheet("Action3").GetRowCount
			'msgbox tsrowcount
			
		For k = 1 To tsrowcount Step 1
			datatable.SetCurrentRow(k)
			If testcaseid=Datatable("TestcaseId","Action3") Then
			keyword=Datatable("Keyword","Action3")
			'msgbox keyword
			
			Select Case (keyword)
						
				Case "M2_SS2"
                              msgbox "Slideshow 1"
				openURL()
				Call Slideshow1()
				 closeApp()
				
				Case "M2_SSRL"
                            msgbox "Navigation arrows"
				openURL()
				call Left_RightArrow()
                             closeApp()
				
				Case "M2_Fea1"
				msgbox "Featured slide"
				openURL()
				Call Featured()
				closeApp()
				
				Case "M2_Fea3"
				msgbox "Add to cart button"
				openURL()
				Call addToCartButton()
				closeApp()
				
				Case "M2_Fea5"
				msgbox "Add to wishlist"
    				openURL()
				Call addToWishlist()
				closeApp()
				
				Case "M2_Fea6"
				msgbox "compare button"
				openURL()
				Call addToComparebutton()
				
				
				Case "M2_Fea7"
				Call ProductComp()
				closeApp()
				
				Case "M2_SS3"
				msgbox "slideshow 2"
				openURL()
				Call Slideshow2()
				closeApp()				
				
			End Select				
			End If
		Next
 @@ script infofile_;_ZIP::ssf46.xml_;_
 @@ script infofile_;_ZIP::ssf50.xml_;_
			End If
		Next
	End If
Next
 @@ hightlight id_;_2820826_;_script infofile_;_ZIP::ssf39.xml_;_
 
Services.EndTransaction "Mod_2"



 @@ script infofile_;_ZIP::ssf51.xml_;_


 @@ hightlight id_;_8323270_;_script infofile_;_ZIP::ssf18.xml_;_
 @@ script infofile_;_ZIP::ssf44.xml_;_
 @@ hightlight id_;_8323270_;_script infofile_;_ZIP::ssf20.xml_;_
 @@ script infofile_;_ZIP::ssf23.xml_;_
 @@ hightlight id_;_1575748_;_script infofile_;_ZIP::ssf31.xml_;_
