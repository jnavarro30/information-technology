---
outline: deep
---

## Celluar Networks

- Land is separated into cells

| Core | Name |
| ----------- | ----------- |
| 1 | [220-1101]() |
| 2 | [220-1102]() |

## Port Numbers

| Protocol | Port(s) | Description |
| ----------- | ----------- | ----------- |
| File Transfer Protocol (FTP) | tcp/20, tcp/21 | 20 - Active mode data, 21 - Control. Authenticates w/ username/password and some systems us a generic/anonymous login. It has full featured functionality |
| Secure Shell (SSH) | tcp/22 | behaves/looks similar to Telnet |
| Telecommunication Network (Telnet) | tcp/23 | Does not support ssh, info in the clear without encryption |
| Simple Mail Transfer Protocol (SMTP) | tcp/25 | Also used to send mail from a device to a mail server commonly configured on mobile devices and email other protocols are used for clients to receive email IMAP, POP3 |
| Domain Name System (DNS) | udp/53 | Converts names to IP addresses for example www.promes.com = 162.159.246.164. Popular, usually multiple DNS servers are running |
| Dynamic Host Configuration Protocol (DHCP) | udp/67, udp/68 | Automated behind the scenes, configuration of IP address, subnet mask and other options. requires a dhcp server server, appliance, integrated into a SOHO router, etc. dynamic/pooled ip addresses are assigned in real-time from a pool each system is given a lease and must renew at set intervals DHCP Reservation addresses are assigend by MAC address in the DHCP server Manage addresses from one location |
| Hypert Text Protocol (HTTP) | tcp/80 | communication in the browser and by other applications in the clear or encrypted supported by nearly all web servers and clients web server communication |
| Hypert Text Protocol Secure (HTTPS) | tcp/443 | communication in the browser and by other applications in the clear or encrypted supported by nearly all web servers and clients web server communication with encryption |
| Post Office Protocol v3 (POP3) | tcp/110 | Receive emails from an email server authenticate and transfer, basic mail transfer functionality |
| Internet Message Access Protocal v4 (IMAP4) | tcp/143 | Receive emails from an email server authenticate and transfer. includes management of email inbox from multiple clients |
| Server Message Block (SMB) | ----------- | protocol used by microsoft windows. file sharing, printer sharing also called CIFS Common Internet File System |

Some Older systems use additonal protocal inside of tcip/ip
| Protocol | Port(s) | Description |
| ----------- | ----------- | ----------- |
| NetBIOS (NetBT) | tcp/ip | ----------- |
| NetBIOS name services (nbname) | udp/137 | ----------- |
| NetBIOS session service (nbsession) | tcp/139 | ----------- |

Modern Systems
| Protocol | Port(s) | Description |
| ----------- | ----------- | ----------- |
| ----------- | tcp/455 | (NetBIOS-less). direct SMB communication over TCP without the NetBIOS transport |
| Lightweight Directory Access Protocol (LDAP/LDAPS) | tcp/389 | store and tetrieve info in a network dir commonl used in microsoft active dir |
| Remote Desktop Protocol (RDP) | tcp/3389 | share desktop from a remote location over tcp/338 RD Services on many windows versions can connect to an entire desktop or just an app clients for windows, macOS, linux, unix, iphone, android and others|
