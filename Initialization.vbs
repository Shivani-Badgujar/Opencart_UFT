Dim objuft

Set objuft=createObject("QuickTest.Application")
objuft.visible=True
objuft.launch
objuft.open("C:\Users\sfjbs\Desktop\opencart\DataDrivenFramework\Driver\Driver")
objuft.Test.Run
objuft.Test.Close
objuft.quit
set objuft=nothing