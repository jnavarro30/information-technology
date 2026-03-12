---
outline: deep
---


## TERMS

| TERM | DEFINITION | DESCRIPTION |
| ----------- | ----------- | ----------- |
| AAA | Authentication, Authorization & Accounting | ??? |
| DHCP | Dynamic Host Configuration Protocol | Automatically assigns ip addresses and other configuration settings when you start your computer. Very common service, availbe on most home routers and used in enterprise enviroments. Enterprise DHCP will be redundant just in case one server goes down. |
| DNS | Domain Name System | Converts names to ipaddresses and vice versa. |
| File Share | Centralized storage of documents, spreadsheets, videos, pictures and other files. | Standard system of file management. Windows uses SMB (Server Message Block) and iOS uses Apple Filing Protocol (AFP), etc. Most of the time it is hidden so you don't know what system you are using, all you know is that you can edit, copy, delete files. |
| ICS | Industrial Control System | ??? |
| IPP | Internet Printing Protocol | ??? |
| LPD | Line Printer Daemon | ??? |
| NTP | Network Time Protocol | ??? |
| SCADA | Supervisory Control & Data Acquisition System | ??? |
| SMB | Server Message Block | Windows standard file share system. |
| SIEM | Security Information & Event Manager | Central consolidation are for all your log files, a central logging center. A lot of disk space needed, keep for history |
| SQL | Structured Query Language | ??? |
| Syslog | Standard for message logging | Diverse systems, consolidated log |
| UTM | Unified Threat Management | ??? |
| LPD | Line Printer Daemon | ??? |

## MORE

DNS Server - Distributed naming system, the load is balanced across many different servers. Usually managed by the ISP or eterprise IT department, a critical resource.

Mail Server - Cloud or local. Store incoming mail, send outgoing mail. Usually managed by the ISP or the enterprise IT department. A complex set of requirements. Usually one of the most important services is 24/7 support.

Print Server - Connect a printer to the network, provides printing services for all network devices. The printer is setup by software on the computer or may have built-in network adapter and software. Uses standard pringint protocols: SMB, IPP and LPD.

Web Server - Responds to browser requests. Uses standart HTTP/HTTPS protocols. Pages are built with HTML/HTML5. Web pages are store in the server and downloaded to the browser. You can have static pages or built dynamically in real-time.

Authentication Server - The login server. Check you username/passowrd credentials in order to provide you with resources or access. Centralized management, usually in enterprise not at home. Enterprise highest level of security. Redudants servers.

Database Servers - store information in database tables, can connect to eachother (relational database) flexible and fast. SQL Structured Query Language to access data using a standard language MySQL ant others.

NTP Servers - THe time of day is more important than you might think. Encryption, logins, backups, log timestamps. Everything needs to work from the same clock. Responds to time requests from NTP clients.

NTP client - request time updates from NTP server, daily sync is common.

Spam gateways - unsolicited email, stop it a the gateway before it reaches the user. On-site or cloud-based.

All-in-one security appliance - Placed between you and the internet. Next-generation firewall, UTM/web security gateway. URL filter / Content, malware inspection, spam filter, CSU/DSU, routher, switch, firewall, IDS/IPS, bandwidth shaper and VPN endpoint

Load Balancers - How companies maintain the uptime and availability of their services. Connect multi devices and share the load across the systems. Invisible to user. Large-scale implementations, web server farms, database farms. Fault tolerance, server outages have no effect and very fast convergence.

Proxy server - For either inbound or outbound communication. Proxy sends the request on behalf of the client, receieves and examines the response (security) and then sends back to the end user. Mainly use for security but can be used as access control, caching, URL filtering and content scanning.

SCADA/ICS - Large-scale, multi-site industrial. PC manages equimnet, power generation, refining, manufacturing equipment, facilities, industrial, energy and logistics. Distributed control systems, real-time information, system control. Requires extensive segementation, no access from the outside.

Legacy - Very old can be very important to maintain, just as important as maintain the new technology.

Embedded Systems - Can be very important, purpose-built device. Not usual to have direct access to the operating system. Alarm system, door security and time card system.

IoT - Appliances, smart devices, air control, access via doorbells and garage doors. May require a segmented network to limit any security breaches.