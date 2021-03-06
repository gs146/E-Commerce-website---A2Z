USE [master]
GO
/****** Object:  Database [Commerce]    Script Date: 16-05-2021 23:31:22 ******/
CREATE DATABASE [Commerce]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Commerce', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Commerce.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Commerce_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Commerce_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Commerce] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Commerce].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Commerce] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Commerce] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Commerce] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Commerce] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Commerce] SET ARITHABORT OFF 
GO
ALTER DATABASE [Commerce] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Commerce] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Commerce] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Commerce] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Commerce] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Commerce] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Commerce] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Commerce] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Commerce] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Commerce] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Commerce] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Commerce] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Commerce] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Commerce] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Commerce] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Commerce] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Commerce] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Commerce] SET RECOVERY FULL 
GO
ALTER DATABASE [Commerce] SET  MULTI_USER 
GO
ALTER DATABASE [Commerce] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Commerce] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Commerce] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Commerce] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Commerce] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Commerce] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Commerce', N'ON'
GO
ALTER DATABASE [Commerce] SET QUERY_STORE = OFF
GO
USE [Commerce]
GO
/****** Object:  Table [dbo].[address]    Script Date: 16-05-2021 23:31:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[address](
	[address_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[locality] [varchar](50) NOT NULL,
	[city] [varchar](50) NOT NULL,
	[state] [varchar](50) NOT NULL,
	[country] [varchar](50) NOT NULL,
	[pincode] [int] NOT NULL,
	[address_type] [varchar](50) NOT NULL,
 CONSTRAINT [PK_address] PRIMARY KEY CLUSTERED 
(
	[address_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cart]    Script Date: 16-05-2021 23:31:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cart](
	[cart_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[product_id] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[cost_per_unit] [int] NOT NULL,
	[status] [varchar](50) NOT NULL,
 CONSTRAINT [PK_cart] PRIMARY KEY CLUSTERED 
(
	[cart_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[category]    Script Date: 16-05-2021 23:31:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[category](
	[category_id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_category] PRIMARY KEY CLUSTERED 
(
	[category_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[customer]    Script Date: 16-05-2021 23:31:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[customer](
	[cust_id] [int] IDENTITY(1,1) NOT NULL,
	[firstname] [varchar](50) NOT NULL,
	[lastname] [varchar](50) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[date_of_birth] [date] NOT NULL,
	[password] [varchar](50) NOT NULL,
	[gender] [varchar](10) NOT NULL,
 CONSTRAINT [PK_customer] PRIMARY KEY CLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[order]    Script Date: 16-05-2021 23:31:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order](
	[product_id] [int] NOT NULL,
	[orderDate] [date] NOT NULL,
	[email] [varchar](50) NOT NULL,
	[quantity] [int] NOT NULL,
	[cost] [int] NOT NULL,
	[cart_id] [int] NOT NULL,
	[order_id] [int] NOT NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[payment]    Script Date: 16-05-2021 23:31:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payment](
	[payment_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[card_number] [int] NOT NULL,
	[card_type] [varchar](50) NOT NULL,
	[card_holder_name] [varchar](50) NOT NULL,
	[card_expiry_month] [int] NOT NULL,
	[card_expiry_year] [int] NOT NULL,
	[primary_payment] [bit] NOT NULL,
	[card_cvv] [int] NOT NULL,
 CONSTRAINT [PK_payment] PRIMARY KEY CLUSTERED 
(
	[payment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[product]    Script Date: 16-05-2021 23:31:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[product_id] [int] NOT NULL,
	[name] [varchar](50) NOT NULL,
	[description] [varchar](90) NOT NULL,
	[category_id] [int] NOT NULL,
	[price] [int] NOT NULL,
	[quantity] [int] NOT NULL,
 CONSTRAINT [PK_product] PRIMARY KEY CLUSTERED 
(
	[product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[address]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[customer] ([email])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[cart]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[customer] ([email])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[order]  WITH CHECK ADD FOREIGN KEY([cart_id])
REFERENCES [dbo].[cart] ([cart_id])
GO
ALTER TABLE [dbo].[order]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[customer] ([email])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[order]  WITH CHECK ADD FOREIGN KEY([product_id])
REFERENCES [dbo].[product] ([product_id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[payment]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[customer] ([email])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product]  WITH CHECK ADD FOREIGN KEY([category_id])
REFERENCES [dbo].[category] ([category_id])
ON DELETE CASCADE
GO
USE [master]
GO
ALTER DATABASE [Commerce] SET  READ_WRITE 
GO
