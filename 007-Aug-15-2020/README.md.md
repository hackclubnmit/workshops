## Linux Basics
- By Sagar M
- Date: 15-08-2020

### What is Linux?
The Linux kernel, developed by contributors worldwide, is a free and open-source, monolithic, modular, Unix-like operating system kernel. It is deployed on a wide variety of computing systems, such as embedded devices, mobile devices, personal computers, servers, mainframes, and supercomputers.

### What is GNU/Linux?
Linux is the kernel and the kernel alone. The software which make the linux operating system is GNU software. There is a big controversy regarding this and can be read in detail here: [Wikipedia](https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy)

### File Heirarchy
```sh
$ tree -d -L 1 /
/
├── bin -> usr/bin (necessary program binary files)

├── boot (all boot files necessary, kernel image)

├── dev (device files, device drivers)

├── etc (system wide config files)

├── home (user home directory, for each user)

├── lib -> usr/lib (libraries used by binaries)

├── lib64 -> usr/lib (64 bit libraries)

├── lost+found (needed for data integrity checks)

├── mnt (temporary mounted filesystems)

├── opt (optional application software)

├── proc (process and kernel info)

├── root (home directory for the root user)

├── run (info from last use of system)

├── sbin -> usr/bin (essential system binaries)

├── srv (needed for servers and version control)

├── sys (info about devices, drivers, etc)

├── tmp (temporary files)

├── usr (read only user data and programs)

└── var (variable files, size changes during operation)
```
> Further Reading: [Wikipedia](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)

### Groups
In Linux, a group is a collection of users. The main purpose of the groups is to define a set of privileges like read, write, or execute permission for a given resource that can be shared among the users within the group. Users can be added to an existing group to utilize the privileges it grants.
- **Primary or login group** – is the group that is assigned to the files that are created by the user. Usually, the name of the primary group is the same as the name of the user. Each user must belong to exactly one primary group.
- **Secondary or supplementary group** - used to grant certain privileges to a set of users. A user can be a member of zero or more secondary groups.

#### Group Management

List all groups
```sh
cat /etc/groups
```

List groups user is a part of
```sh
groups user_name
```

### File Permissions
Everything in Linux/Unix is a file!
[Yes! Even directories!](https://askubuntu.com/questions/1073802/what-are-directories-if-everything-on-linux-is-a-file)

File permissions can be read [here](https://medium.com/@madeeshafernando/basics-of-linux-file-permission-5db00bd9749f)

Changing file permission can be done like so
```sh
chmod 777 file.txt
```
The above command will give all users read, write, execute permissions (i.e to user, group and other).

## Resources
- [Kernel Basics](https://www.youtube.com/watch?v=rTcnTOXf_jM)
- [Learning the Linux File System](https://www.youtube.com/watch?v=HIXzJ3Rz9po)
- [Shell Scripting Tutorial by Derek Banas](https://www.youtube.com/watch?v=hwrnmQumtPw)
- [Mastering Systemd](https://www.redhat.com/sysadmin/mastering-systemd)
- [The beauty of Unix Pipelines](https://prithu.xyz/posts/unix-pipeline/)
- [Help message for shell scripts](https://samizdat.dev/help-message-for-shell-scripts/)
- [Learning operating system development using Linux kernel and Raspberry Pi](https://s-matyukevich.github.io/raspberry-pi-os/)
- [Heavily Commented Source Code Book [PDF]](http://www.oldlinux.org/download/ECLK-5.0-WithCover.pdf)
- [(Advanced) The Linux Programming Interface](https://man7.org/tlpi/)
