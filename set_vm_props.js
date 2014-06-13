try
{
	for(var i = 0; additionanvCACProps.keys.length > i; i++)
	{
		System.getModule("com.vmware.library.vcac").addUpdatePropertyFromVirtualMachineEntity(vCACHost,virtualMachineEntity,additionanvCACProps.keys[i],additionanvCACProps.get(additionanvCACProps.keys[i]).toString(),false,false,false,false);
	}
}
catch (ex)
{
	System.log("No additional values");
}
