System.log("vCAD");
var attributes = AppStore.attributes;

try
{
	for(var i = 0; attributes.length > i; i++)
	{
		if(attributes[i].value.get("Name").toString() == depoloymentName)
		{
			appProperties = attributes[i].value;
			break;
		}
	}
	
	var props = appProperties.keys;
	for(var j = 0; props.length > j; j++)
	{
		if(props[j].indexOf(vCACVm.virtualMachineName) > -1 || props[j].indexOf(vCACVm.virtualMachineName.split("-")[0]) > -1)
		{	
			System.log(props[j]);
			additionanvCACProps = appProperties.get(props[j]);
			break;
		}
	}
}
catch (ex)
{
}
