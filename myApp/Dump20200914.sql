-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: hanglose
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` text,
  `precio` int(11) DEFAULT NULL,
  `descripcion` text,
  `nombre` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (9,'imagen-1597374591060.png',1050,'Shaped in South Africa','Vans by Al merrick'),(10,'imagen-1597374654634.png',750,'Shaped in california','Fish Tail Al merrick'),(14,'imagen-1597537145415.png',650,'Chanel Island ','Al merrick'),(21,'imagen-1597903636759.png',600,'Shaped in South Africa','Funboard CIS'),(22,'imagen-1597963715790.png',650,'Shaped in South Africa','Retro Fish'),(24,'imagen-1599085117503.png',654345678,'Shaped in South Africa','Al merrick');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_producto`
--

DROP TABLE IF EXISTS `usuario_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_producto_fk_1` (`usuario_id`),
  KEY `usuario_producto_fk_2` (`producto_id`),
  CONSTRAINT `usuario_producto_fk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `usuario_producto_fk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_producto`
--

LOCK TABLES `usuario_producto` WRITE;
/*!40000 ALTER TABLE `usuario_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` text,
  `password` text,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'lau@mail.com','$2b$10$XqFuqRQ7uZo04oKVtWKpS.i0u0CWMNarCe4X.QX5AatGlt0Wc9EZW','lautaro'),(2,'jony@melaslavo.com','$2b$10$r/eZ9AFwYDW8NqEVsYSsSujnX0NeR4ncpzdMNRZ/3EHg.zTR/2KGO','jony'),(3,'admin@mail.com','$2b$10$0afh.1dVdIT9nPl.ETSF1OTcCqIA72YF2trWK5JrHTZPouLnCSK26','admin'),(4,'juan@mail.com','$2b$10$oIJc/EgJSda.qk2IM85yo..Y1B4NP33f411ByzKZ4UzfyJZOeK6WC','juan'),(5,'charly@garcia.com','$2b$10$yXTjCodH2iKIt2DOmQi13O6z1Ul8q0k5ioUb0GUtrB27noCPtD9ii','charly'),(6,'harry@potter.com','$2b$10$O3Uf/LVPHpRtzuGSi/fCD.gb5gEPXtKhil9Ml2Ix6kFsYcirYF7qW','harry'),(7,'jose@altomail.com','$2b$10$JMdYGSURuK33VHkE7SAKH.qUWccNcJX5qdA3JPm7HOVXH6kiXo10O','jose'),(8,'jose@altomail.com','$2b$10$nlRaKj8qa7xreur2p6..XOV0T/OTasMhn.wGvmzoMzr4DlFhyb/iy','jose');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-14 18:45:16
