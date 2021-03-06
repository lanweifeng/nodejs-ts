-- MySQL Script generated by MySQL Workbench
-- Fri Jul  6 10:43:43 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema lsbcmcceosdb
-- -----------------------------------------------------
-- 链石区块链管理控制中心数据库
DROP SCHEMA IF EXISTS `lsbcmcceosdb` ;

-- -----------------------------------------------------
-- Schema lsbcmcceosdb
--
-- 链石区块链管理控制中心数据库
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lsbcmcceosdb` DEFAULT CHARACTER SET utf8 ;
USE `lsbcmcceosdb` ;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '账号名称',
  `pubkey` varchar(54) DEFAULT NULL COMMENT '公钥',
  `prikey` varchar(52) DEFAULT NULL COMMENT '密钥',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `chain`
--

DROP TABLE IF EXISTS `chain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chain` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chainid` varchar(100) NOT NULL COMMENT '链ID',
  `apiurl` varchar(100) DEFAULT NULL COMMENT '对业务暴露的api地址，默认会设置为boot节点的apiurl',
  `walleturl` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '链部署状态\n0: 未部署\n1: bootnode出块阶段\n2: 生产者出块阶段',
  `bios` tinyint(1) DEFAULT NULL COMMENT '0: 未部署bios合约\n1: 已部署bios合约',
  PRIMARY KEY (`id`),
  UNIQUE KEY `chainid_UNIQUE` (`chainid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `chaincode`
--

DROP TABLE IF EXISTS `chaincode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chaincode` (
  `chaincodeid` varchar(50) NOT NULL,
  `chaincodeversion` varchar(50) NOT NULL,
  `chaincodename` varchar(200) NOT NULL COMMENT '合约代码描述',
  `srcpath` varchar(200) NOT NULL COMMENT '合约源代码存放路径',
  `srcid` varchar(50) DEFAULT NULL,
  `srcversion` varchar(50) DEFAULT NULL,
  `initparams` varchar(100) DEFAULT NULL,
  `ischaincodecreate` char(1) DEFAULT NULL,
  PRIMARY KEY (`chaincodeid`,`chaincodeversion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contracts`
--

DROP TABLE IF EXISTS `contracts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contracts` (
  `contractname` varchar(45) NOT NULL COMMENT '合约名称',
  `contractdesc` varchar(200) DEFAULT NULL COMMENT '合约描述',
  `deploystatus` varchar(10) DEFAULT NULL COMMENT '部署状态：1已上传2已部署',
  `deployuser` varchar(45) DEFAULT NULL COMMENT '部署账号',
  `uploaddate` datetime DEFAULT NULL COMMENT '上传时间',
  `deploydate` datetime DEFAULT NULL COMMENT '部署时间',
  `contractsrc` varchar(45) DEFAULT NULL COMMENT '文件路径',
  `isvalid` varchar(10) DEFAULT NULL COMMENT '有效标志：0无效1有效',
  PRIMARY KEY (`contractname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='合约';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id 自增',
  `userid` varchar(20) NOT NULL,
  `username` varchar(45) NOT NULL,
  `createtime` varchar(45) NOT NULL COMMENT '创建时间 \n存储时间格式 yyyyMMdd hh:mm:ss.sss',
  `menuid` varchar(4) DEFAULT NULL,
  `menuname` varchar(45) DEFAULT NULL,
  `loginip` varchar(100) DEFAULT NULL COMMENT '客户端ip',
  `operationtype` varchar(2) DEFAULT NULL COMMENT '00登陆、01查看、02新增、03修改、04删除',
  `detail` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=990 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `menuid` varchar(4) NOT NULL COMMENT '0开头为系统功能菜单\n1开头为运营中心菜单\n2开头为管理中心菜单\n3开头为运行监控中心\n4开头为版本中心\n以上菜单用户不能编辑修改只能查询\n5开头为用户自定义菜单',
  `href` varchar(200) DEFAULT NULL COMMENT '功能url',
  `menuname` varchar(45) NOT NULL COMMENT '菜单名称',
  `mtype` varchar(4) NOT NULL COMMENT '菜单类型层级\n如 - 为 菜单，功能菜单为父菜单id，0000',
  PRIMARY KEY (`menuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `node`
--

DROP TABLE IF EXISTS `node`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `node` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL COMMENT '节点名称',
  `type` tinyint(1) DEFAULT NULL COMMENT '节点类型\n0: boot节点\n1: 出块节点\n2: 普通节点',
  `apiurl` varchar(100) DEFAULT NULL COMMENT 'api地址\nhost:port',
  `p2purl` varchar(100) DEFAULT NULL COMMENT 'p2p地址\nhost:port',
  `serviceid` varchar(100) DEFAULT NULL COMMENT 'docker 服务id',
  `status` tinyint(1) DEFAULT NULL COMMENT '节点状态\n0: 停止\n1: 运行中',
  `apiport` varchar(45) DEFAULT NULL,
  `p2pport` varchar(45) DEFAULT NULL,
  `image` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `memorylimit` varchar(45) DEFAULT NULL,
  `runmemszmb` varchar(45) DEFAULT NULL,
  `diskszmb` varchar(45) DEFAULT NULL,
  `hostname` varchar(45) DEFAULT NULL,
  `filteron` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nodeparams`
--

DROP TABLE IF EXISTS `nodeparams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nodeparams` (
  `nodetype` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `memorylimit` varchar(45) DEFAULT NULL,
  `runmemszmb` varchar(45) DEFAULT NULL,
  `diskszmb` varchar(45) DEFAULT NULL,
  `hostname` varchar(45) DEFAULT NULL,
  `filteron` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`nodetype`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='参数表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `production`
--

DROP TABLE IF EXISTS `production`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `production` (
  `nodename` varchar(100) DEFAULT NULL COMMENT '节点名称',
  `producername` varchar(20) DEFAULT NULL COMMENT '出块账号名称',
  `producing` tinyint(1) DEFAULT NULL COMMENT '0: 没在链上设置出块\n1: 已在脸上设置出块',
  UNIQUE KEY `production` (`nodename`,`producername`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `roleid` int(11) NOT NULL AUTO_INCREMENT,
  `rolename` varchar(45) NOT NULL,
  `des` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rolemenu`
--

DROP TABLE IF EXISTS `rolemenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rolemenu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleid` int(11) NOT NULL,
  `menuid` varchar(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `transaction_id` varchar(45) COLLATE utf8_bin NOT NULL COMMENT '交易ID',
  `block_num` int(11) NOT NULL COMMENT '区块高度',
  `timestamp` datetime NOT NULL,
  `actions` varchar(45) COLLATE utf8_bin DEFAULT NULL COMMENT '该交易包含动作数',
  PRIMARY KEY (`transaction_id`),
  UNIQUE KEY `transaction_id_UNIQUE` (`transaction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `transaction_count`
--

DROP TABLE IF EXISTS `transaction_count`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction_count` (
  `time` datetime NOT NULL COMMENT '交易时段',
  `count` int(11) DEFAULT '0' COMMENT '交易数量',
  `type` varchar(45) COLLATE utf8_bin NOT NULL COMMENT '数量类型：m分钟数据,h小时数据，d天数据',
  PRIMARY KEY (`time`),
  UNIQUE KEY `time_UNIQUE` (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='交易数量表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userid` varchar(20) NOT NULL COMMENT '用户登陆名 \n英文数字唯一',
  `username` varchar(45) NOT NULL COMMENT '用户名 中文',
  `password` varchar(80) NOT NULL,
  `roleid` int(11) NOT NULL,
  `createtime` varchar(45) DEFAULT NULL COMMENT '创建时间 \n存储时间格式 yyyyMMdd hh:mm:ss.sss',
  `status` char(1) NOT NULL COMMENT '用户状态\n0正常\n1注销',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO `account` VALUES (1,'eosio','EOS8iGzdPMtb65kQmBNcd6m6LU974udEsZMdRr3M5vNW2WH3tVQaG','5KK554R6PXQ88wBn3qcKMSp9fFptYoNYG9bAW1ocBMjEJscMC47');

INSERT INTO `chain` VALUES (1,'3da08f376e32afc63b5ae86d922bc70d6107602eb0d61547f5e5e789c2ed12be','http://apinode-service:8888',NULL,0,NULL);

INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("0000","00","系统功能","-");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("0001","/menu/userManagement","用户管理","0000");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("0002","/menu/roleManagement","角色管理","0000");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("0003","/menu/menuManagement","菜单管理","0000");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("0004","/menu/log","日志管理","0000");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("2000","22","管理中心","-");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("2001","/menu/producerManagement","账号管理","2000");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("2002","/menu/nodeManagement","节点管理","2000");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("2003","/menu/chaincodeManagement","合约管理","2000");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("3000","33","运行监控中心","-");
--INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("3001","/menu/visualChain","链交易状况","3000");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("3002","/menu/visualNode","节点状况","3000");
INSERT INTO menu (menuid,href,menuname,mtype) VALUES ("3003","/menu/checkBlock","链总览","3000");

INSERT INTO rolemenu(roleid, menuid) VALUES (1,"0000");
INSERT INTO rolemenu(roleid, menuid) VALUES (1,"0001");
INSERT INTO rolemenu(roleid, menuid) VALUES (1,"0002");
INSERT INTO rolemenu(roleid, menuid) VALUES (1,"0003");
INSERT INTO rolemenu(roleid, menuid) VALUES (1,"0004");
INSERT INTO rolemenu(roleid, menuid) VALUES (1,2000);
INSERT INTO rolemenu(roleid, menuid) VALUES (1,2001);
INSERT INTO rolemenu(roleid, menuid) VALUES (1,2002);
INSERT INTO rolemenu(roleid, menuid) VALUES (1,2003);
INSERT INTO rolemenu(roleid, menuid) VALUES (1,3000);
--INSERT INTO rolemenu(roleid, menuid) VALUES (1,3001);
INSERT INTO rolemenu(roleid, menuid) VALUES (1,3002);
INSERT INTO rolemenu(roleid, menuid) VALUES (1,3003);

INSERT INTO `nodeparams` VALUES (0,'chaintor/mercury:v0.9.0','2Gi',NULL,'2048','node1',NULL),(1,'chaintor/mercury:v0.9.0','2Gi',NULL,'2048','node2',NULL),(2,'chaintor/mercury:v0.9.0','4Gi',NULL,'4096','node3','yygj.token::,platform::,eosio:newaccount:'),(3,'chaintor/mercury:v0.9.0',NULL,NULL,NULL,NULL,NULL);

INSERT INTO user(userid, username, password, roleid, createtime, status) VALUES ("admin", "管理员", "b9d11b3be25f5a1a7dc8ca04cd310b28",1,now(),0);
insert into role(roleid,rolename,des) values (1,"admin","管理员");

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
