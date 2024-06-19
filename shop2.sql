-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th6 15, 2024 lúc 12:54 AM
-- Phiên bản máy phục vụ: 5.7.28-0ubuntu0.18.04.4
-- Phiên bản PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shop2`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT '1',
  `color` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`cart_id`, `customer_id`, `product_id`, `quantity`, `color`) VALUES
(1, 1, 1, 12, 'blue'),
(2, 1, 2, 12, 'yellow'),
(3, 1, 4, 12, 'red');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`category_id`, `name`, `image`) VALUES
(1, 'Funiture', 'Furniture.webp'),
(2, 'Outdoor', 'Outdoor.webp'),
(3, 'Bedding & Bath', 'Bedding&Bath.webp'),
(4, 'Decor & Pillow', 'Decor&Pillow.webp'),
(5, 'Rugs', 'Rugs.webp'),
(6, 'Lighting', 'Lighting.webp'),
(7, 'Home Improvement', 'Home_Improvement.webp'),
(8, 'Appliances', 'Appliances.webp'),
(9, 'Kitchen', 'Kitchen.webp'),
(10, 'Organization', 'Organization.webp'),
(11, 'Custom Cabinetry', 'Custom_Cabinetry.webp'),
(12, 'Pet', 'Pet.webp'),
(13, 'Baby & Kids', 'Baby&Kids.webp');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `search` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_name`, `email`, `address`, `phone`, `password`, `search`) VALUES
(1, 'John Smith', 'johnsmith@example.com', '123 A Street, Ho Chi Minh City', '0909123456', 'password1', 'living room sofa'),
(2, 'Jane Doe', 'janedoe@example.com', '456 B Street, Hanoi', '0909123457', 'password2', 'double bed'),
(3, 'Michael Johnson', 'michaelj@example.com', '789 C Street, Da Nang', '0909123458', 'password3', 'dining table'),
(4, 'Emily Davis', 'emilyd@example.com', '101 D Street, Ho Chi Minh City', '0909123459', 'password4', 'wardrobe'),
(5, 'David Brown', 'davidb@example.com', '202 E Street, Hanoi', '0909123460', 'password5', 'bookshelf');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `total` float DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `order_date`, `total`) VALUES
(1, 1, '2023-01-01 00:00:00', 1500),
(2, 2, '2023-01-02 00:00:00', 2000),
(3, 3, '2023-01-03 00:00:00', 2500),
(4, 4, '2023-01-04 00:00:00', 1000),
(5, 5, '2023-01-05 00:00:00', 3000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_details`
--

CREATE TABLE `order_details` (
  `order_detail_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT '1',
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `order_details`
--

INSERT INTO `order_details` (`order_detail_id`, `order_id`, `product_id`, `quantity`, `price`) VALUES
(1, 1, 1, 1, 5000),
(2, 1, 2, 1, 8000),
(3, 1, 3, 1, 2000),
(4, 2, 4, 1, 3000),
(5, 2, 5, 1, 2000),
(6, 2, 6, 1, 2500),
(7, 3, 7, 1, 7000),
(8, 3, 8, 1, 1500),
(9, 3, 9, 1, 8000),
(10, 4, 1, 1, 200),
(11, 4, 1, 1, 1500),
(12, 4, 2, 1, 5000),
(13, 5, 3, 1, 7000),
(14, 5, 4, 1, 1500),
(15, 5, 5, 1, 1200),
(16, 1, 6, 1, 8000),
(17, 2, 7, 1, 3000),
(18, 3, 8, 1, 4000),
(19, 4, 9, 1, 3500),
(20, 5, 2, 1, 2500);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `room_id` varchar(50) DEFAULT NULL,
  `product_name` varchar(100) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `stock` varchar(40) NOT NULL DEFAULT '36-26',
  `image_urls` varchar(255) DEFAULT 'anh1.png-anh2.jpg',
  `image_url` varchar(255) DEFAULT NULL,
  `color` varchar(100) DEFAULT 'red-#567421',
  `size` text,
  `detail_description` text,
  `restock_threshold` int(11) DEFAULT '5'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`product_id`, `category_id`, `room_id`, `product_name`, `description`, `price`, `stock`, `image_urls`, `image_url`, `color`, `size`, `detail_description`, `restock_threshold`) VALUES
(1, 1, 'Living room', 'Piece Upholstered Sectional', 'Renner 2 - Piece Upholstered Sectional', '500.00', '100', 'sofa1.webp*sofa2.webp', 'sofa1.webp', 'dark*light', 'Back Cushion:17*Chaise:30.25', 'Leg Color / Finish:Black*Arm Style:\r\nSquare Arms', 5),
(2, 2, 'Bedroom', 'Quebec Reversible Coverlet Set', 'Wayfair Basics® 1800 Series Sheet Set', '800.00', '750', 'bed1.webp*bed2.webp*bed3.webp', 'bed1.webp', 'seafoam*cream*dark', 'width:150*height:230', 'Pattern:Solid Color*Bedding Material:Microfiber', 5),
(3, 3, 'Dinning room', 'Pouliot MDF Laminate Bar Cart', 'Pouliot MDF Laminate Bar Cart', '600.00', '8', 'dinning1.webp', 'dinning1.webp', 'brown', 'height:34*width:27.5*strong:16', 'Number of Wheels:4*Number of Handles:1', 5),
(4, 4, 'Kitchen', 'Kitchen Island Table with Power Outlet', 'Vuto 35.8\" Kitchen Island Table with Power Outlet', '300.00', '12', 'kitchen1.webp', 'kitchen1.webp', 'Brown', 'height:34*width:27.5*strong:16', 'Number of Wheels:4*Number of Handles:1', 5),
(5, 5, 'Outdoor', 'Steel Patio Gazebo', 'Steel Patio Gazebo', '200.00', '15', 'out1.webp', 'out1.webp', 'gray', 'height:34*width:27.5*strong:16', 'Footprint Shape:Rectangular*Roof Type:Soft-top', 5),
(6, 6, 'Living room', 'Piece Upholstered Sectional', 'Renner 2 - Piece Upholstered Sectional', '500.00', '100', 'sofa1.webp*sofa2.webp', 'sofa1.webp', 'dark*light', 'Back Cushion:17*Chaise:30.25', 'Leg Color / Finish:Black*Arm Style:\r\nSquare Arms', 5),
(7, 7, 'Bedroom', 'Quebec Reversible Coverlet Set', 'Wayfair Basics® 1800 Series Sheet Set', '800.00', '750', 'bed1.webp*bed2.webp*bed3.webp', 'bed1.webp', 'seafoam*cream*dark', 'width:150*height:230', 'Pattern:Solid Color*Bedding Material:Microfiber', 5),
(8, 8, 'Dinning room', 'Pouliot MDF Laminate Bar Cart', 'Pouliot MDF Laminate Bar Cart', '600.00', '8', 'dinning1.webp', 'dinning1.webp', 'brown', 'height:34*width:27.5*strong:16', 'Number of Wheels:4*Number of Handles:1', 5),
(9, 9, 'Kitchen', 'Kitchen Island Table with Power Outlet', 'Vuto 35.8\" Kitchen Island Table with Power Outlet', '300.00', '12', 'kitchen1.webp', 'kitchen1.webp', 'Brown', 'height:34*width:27.5*strong:16', 'Number of Wheels:4*Number of Handles:1', 5),
(10, 10, 'Outdoor', 'Steel Patio Gazebo', 'Steel Patio Gazebo', '200.00', '15', 'out1.webp', 'out1.webp', 'gray', 'height:34*width:27.5*strong:16', 'Footprint Shape:Rectangular*Roof Type:Soft-top', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_related`
--

CREATE TABLE `product_related` (
  `product_id` int(11) DEFAULT NULL,
  `product_related_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product_related`
--

INSERT INTO `product_related` (`product_id`, `product_related_id`) VALUES
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 7),
(7, 5),
(7, 9),
(9, 10),
(10, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_reviews`
--

CREATE TABLE `product_reviews` (
  `review_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT '5',
  `comment` text,
  `review_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product_reviews`
--

INSERT INTO `product_reviews` (`review_id`, `product_id`, `customer_id`, `rating`, `comment`, `review_date`, `image`) VALUES
(1, 1, 1, 5, 'The product is very beautiful and high quality', '2023-01-10 00:00:00', 'review1.jpg'),
(2, 2, 2, 4, 'A bit pricey but worth it', '2023-01-11 00:00:00', 'review2.jpg'),
(3, 3, 3, 5, 'Very satisfied with this product', '2023-01-12 00:00:00', 'review3.jpg'),
(4, 4, 4, 4, 'Good quality, fast delivery', '2023-01-13 00:00:00', 'review4.jpg'),
(5, 5, 5, 5, 'Wonderful product', '2023-01-14 00:00:00', 'review5.jpg'),
(6, 6, 1, 3, 'Haven’t tried it yet but it looks fine', '2023-01-15 00:00:00', 'review6.jpg'),
(7, 7, 2, 4, 'Beautiful design, good material', '2023-01-16 00:00:00', 'review7.jpg'),
(8, 8, 3, 5, 'Worth the money, will buy more products', '2023-01-17 00:00:00', 'review8.jpg'),
(9, 9, 4, 4, 'Really like this product', '2023-01-18 00:00:00', 'review9.jpg'),
(10, 10, 5, 5, 'Good product, reasonable price', '2023-01-19 00:00:00', 'review10.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_sales`
--

CREATE TABLE `product_sales` (
  `product_sale_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `sale_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product_sales`
--

INSERT INTO `product_sales` (`product_sale_id`, `product_id`, `sale_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 2),
(5, 5, 3),
(6, 6, 3),
(7, 7, 4),
(8, 8, 4),
(9, 9, 5),
(10, 10, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `purchases`
--

CREATE TABLE `purchases` (
  `purchase_id` int(11) NOT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `purchase_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `total` float DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `purchases`
--

INSERT INTO `purchases` (`purchase_id`, `supplier_id`, `purchase_date`, `total`) VALUES
(1, 1, '2023-01-01 00:00:00', 1500),
(2, 2, '2023-01-02 00:00:00', 2000),
(3, 3, '2023-01-03 00:00:00', 2500),
(4, 4, '2023-01-04 00:00:00', 1000),
(5, 5, '2023-01-05 00:00:00', 3000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `purchase_details`
--

CREATE TABLE `purchase_details` (
  `purchase_detail_id` int(11) NOT NULL,
  `purchase_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT '1',
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `purchase_details`
--

INSERT INTO `purchase_details` (`purchase_detail_id`, `purchase_id`, `product_id`, `quantity`, `price`) VALUES
(1, 1, 1, 10, 500),
(2, 1, 2, 5, 8000),
(3, 1, 3, 15, 200),
(4, 2, 4, 10, 300),
(5, 2, 5, 8, 2000),
(6, 2, 6, 10, 250),
(7, 3, 7, 7, 7000),
(8, 3, 8, 10, 150),
(9, 3, 9, 20, 800),
(10, 4, 1, 10, 200),
(11, 4, 7, 3, 150),
(12, 4, 2, 10, 500),
(13, 5, 3, 7, 700),
(14, 5, 4, 12, 1500),
(15, 5, 5, 4, 1200),
(16, 1, 6, 15, 800),
(17, 2, 7, 10, 300),
(18, 3, 8, 8, 400),
(19, 4, 9, 10, 350),
(20, 5, 2, 12, 250);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sales`
--

CREATE TABLE `sales` (
  `sale_id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `discount` int(11) DEFAULT '10',
  `date_begin` date NOT NULL,
  `date_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sales`
--

INSERT INTO `sales` (`sale_id`, `title`, `discount`, `date_begin`, `date_end`) VALUES
(1, 'Tet Promotion', 10, '2023-01-01', '2023-01-31'),
(2, 'Womens Day Promotion', 10, '2023-03-01', '2023-03-08'),
(3, 'April 30th Promotion', 10, '2023-04-01', '2023-04-30'),
(4, 'Summer Promotion', 10, '2023-06-01', '2023-06-30'),
(5, 'Christmas Promotion', 10, '2023-12-01', '2023-12-25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `suppliers`
--

CREATE TABLE `suppliers` (
  `supplier_id` int(11) NOT NULL,
  `supplier_name` varchar(30) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `suppliers`
--

INSERT INTO `suppliers` (`supplier_id`, `supplier_name`, `email`, `phone`) VALUES
(1, 'Company A', 'companya@example.com', '0909123461'),
(2, 'Company B', 'companyb@example.com', '0909123462'),
(3, 'Company C', 'companyc@example.com', '0909123463'),
(4, 'Company D', 'companyd@example.com', '0909123464'),
(5, 'Company E', 'companye@example.com', '0909123465');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Chỉ mục cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`order_detail_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `product_related`
--
ALTER TABLE `product_related`
  ADD KEY `product_id` (`product_id`),
  ADD KEY `product_related_id` (`product_related_id`);

--
-- Chỉ mục cho bảng `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `product_sales`
--
ALTER TABLE `product_sales`
  ADD PRIMARY KEY (`product_sale_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `sale_id` (`sale_id`);

--
-- Chỉ mục cho bảng `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`purchase_id`),
  ADD KEY `supplier_id` (`supplier_id`);

--
-- Chỉ mục cho bảng `purchase_details`
--
ALTER TABLE `purchase_details`
  ADD PRIMARY KEY (`purchase_detail_id`),
  ADD KEY `purchase_id` (`purchase_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sale_id`);

--
-- Chỉ mục cho bảng `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`supplier_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `order_details`
--
ALTER TABLE `order_details`
  MODIFY `order_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `product_reviews`
--
ALTER TABLE `product_reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `product_sales`
--
ALTER TABLE `product_sales`
  MODIFY `product_sale_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `purchases`
--
ALTER TABLE `purchases`
  MODIFY `purchase_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `purchase_details`
--
ALTER TABLE `purchase_details`
  MODIFY `purchase_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `sales`
--
ALTER TABLE `sales`
  MODIFY `sale_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `supplier_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product_related`
--
ALTER TABLE `product_related`
  ADD CONSTRAINT `product_related_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_related_ibfk_2` FOREIGN KEY (`product_related_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD CONSTRAINT `product_reviews_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product_sales`
--
ALTER TABLE `product_sales`
  ADD CONSTRAINT `product_sales_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_sales_ibfk_2` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`sale_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`supplier_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `purchase_details`
--
ALTER TABLE `purchase_details`
  ADD CONSTRAINT `purchase_details_ibfk_1` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`purchase_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `purchase_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
