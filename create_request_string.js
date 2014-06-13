pplicationRequestString = "ADF_P_RHEL6.5_x64_template_v1.0_3/hostname=";
applicationRequestString += ADF_pHostname;
applicationRequestString += "||";

applicationRequestString += "ADF_S_RHEL6.5_x64_template_v1.0_4/hostname=";
applicationRequestString += ADF_sHostname;
applicationRequestString += "||";

applicationRequestString += "DB_P_RHEL6.5_x64_template_v1.0/hostname=";
applicationRequestString += ora_pHostname;
applicationRequestString += "||";

applicationRequestString += "DB_S_RHEL6.5_x64_template_v1.0_2/hostname=";
applicationRequestString += ora_sHostname;
applicationRequestString += "||";

applicationRequestString += "BIP_RHEL6.5_x64_template_v1.0_6/hostname=";
applicationRequestString += bip_Hostname;
applicationRequestString += "||";

applicationRequestString += "WEB_RHEL6.5_x64_template_v1.0_5/hostname=";
applicationRequestString += web_Hostname;
applicationRequestString += "||";

applicationRequestString += "ADF_P_RHEL6.5_x64_template_v1.0_3/vcpuCount=";
applicationRequestString += ADF_PrimaryNodeCPUCount;
