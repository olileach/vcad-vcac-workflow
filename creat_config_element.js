var apps = new Properties();

apps.put("ID", deploymentID);
apps.put("Name", deploymentName);

var props = new Properties();
props.put("Custom.Test.Example", ExampleInputForPrimaryVm);
apps.put(pHostname, props);

var props = new Properties();
props.put("Custom.Test.Example", ExampleInputForSecondaryVm);
apps.put(sHostname, props);

var props = new Properties();
props.put("VirtualMachine.Disk1.Size", ora_dev_disk_size);
apps.put(ora_pHostname, props);

AppStore.setAttributeWithKey(deploymentID , apps);
