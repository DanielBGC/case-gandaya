
USE `ganda_case_db`;

SET NAMES utf8mb4;

-- Cria a tabela User
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `balance` FLOAT NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Cria a tabela User
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `price` FLOAT NOT NULL,
    `stock` INTEGER NOT NULL,
    `image` VARCHAR(999),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Cria a tabela Cart
CREATE TABLE `Cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `abandoned` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_user_cart` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Cria a tabela CartItem
CREATE TABLE `CartItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cartId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_cart_cartitem` FOREIGN KEY (`cartId`) REFERENCES `Cart` (`id`) ON DELETE CASCADE,
    CONSTRAINT `FK_product_cartitem` FOREIGN KEY (`productId`) REFERENCES `Product` (`id`) ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Cria a tabela UserOrder
CREATE TABLE `UserOrder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `total` FLOAT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_user_userorder` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Cria a tabela UserOrderItem
CREATE TABLE `UserOrderItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userOrderId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_userorder_userorderitem` FOREIGN KEY (`userOrderId`) REFERENCES `UserOrder` (`id`) ON DELETE CASCADE,
    CONSTRAINT `FK_product_userorderitem` FOREIGN KEY (`productId`) REFERENCES `Product` (`id`) ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Inserindo usuário
INSERT INTO User (id, name, balance) VALUES (1, 'Rodrigo', 300);

-- Inserindo produtos
INSERT INTO Product (id, name, price, stock, image) VALUES (1, 'Caipirinha de uva', 27.5, 0, 'https://receitasdedrinks.com.br/wp-content/uploads/2023/08/Caipirinha-de-Uva-com-Gelo-1024x585.webp');
INSERT INTO Product (id, name, price, stock, image) VALUES (2, 'Cerveja Heineken', 45.0, 0, 'https://superpao.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Fsuperpao.vtexassets.com%2Farquivos%2Fids%2F447816%2FCerveja-Heineken-Long-Neck-250ml.jpg%3Fv%3D638496010482030000');
INSERT INTO Product (id, name, price, stock, image) VALUES (3, 'Gin Tônica', 54.2, 0, 'https://blog.biglar.com.br/wp-content/uploads/2021/12/iStock-1310029561.jpg');
INSERT INTO Product (id, name, price, stock, image) VALUES (4, 'Porção de fritas', 29.9, 0, 'https://i.pinimg.com/736x/a4/30/6b/a4306b0deff0851cf81c1e9a8f5c0527.jpg');
INSERT INTO Product (id, name, price, stock, image) VALUES (5, 'Gin Tanqueray', 40.0, 8, 'https://s3-alpha-sig.figma.com/img/518b/69fc/94f1f919cd8c2500bb4571829a9ae76a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSeLLlpHXVMMH9MgNPwwSLM16VOoGXfcJGNwN9a-gM717py1OvflJ8DlMhd635JIBM6inSMABceAEuhU0bnqE-OYMCaYhOONSbMe7g0JSC1JDb9hVazzH7J7nOYI3zXHAhJV-qikJuaP6jOLi2uYAZFnUiWFjAhUcd6fhjfh2ibw-IgDTWNQm91dldoORqNvdy2X3hIf9U53l4yV9eRP9UDTema6HeNrHWihWcTPq74eBK9bDTbg8nFz0QdFOFT60SGMyt7P8SInbUYAfrSMMULKyLe4Il-1nuHA~Pz9ZE-Yqbu0Y-RRPz0cJH6ynxPimCAfzjapa5EGD~x6gz7Odg__');
INSERT INTO Product (id, name, price, stock, image) VALUES (6, 'Baer Mate', 18, 3, 'https://s3-alpha-sig.figma.com/img/b12e/d228/2cdb9d86d48a73e39ab16dd98b515aac?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LG43VkACMmuRtAaDAIwkokBZctOSJJDkoy8yRxugL3i5v5RloBf-RlpK3WnkPb72Tw2-XjlYAJ8M7i823Gwat5F1nzQ1z3EOa-thC8hSBNy6y5IvjbIFN6eYiYW9PGxUZYkJ5sev3keqGebu8fd7pMxlwWK-sggRQEjHskyTny60L9byRhhnQ-Ww6mHQnXeLrcGce0QP8dqsj1nmk6RlxJoo026aH0I9j2orwOkqga79UytXxQ8Y7HjMYPEOWT0ExoebZa-Gf8TxpdHJ2qZ1vk9c~ZsaqnO9hq7N-5a5aw6LCDwc5HhMq1dB~rMAVyW~hBUBEWMWJNXMHdzjG5jivg__');
INSERT INTO Product (id, name, price, stock, image) VALUES (7, 'Caipirinha de limão', 28.0, 10, 'https://s3-alpha-sig.figma.com/img/65fe/f2ba/564d91ef2112ab5a599ea60e3efc87fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaVljB6bE-WA5fZlaTMSYuoEgC3FZu28Bs6sbwaueTEl~MHDr4W7wTKbZrghzRVO6xDTjjTkEfVshYfAS1A3pGrJZdbabLo2Cbrnrre4IXltg3vof6i2q0UURxZEjoB1IjZ6DJZCZBAm7KDKWre4isVlzTYKDTlDJ8QHMb3JyEuwX4WsvoBvMQR8o2szINRAjmbWl~E2CNCucyF1N~nkVRAtIZnqE7oGBifiD4xxpOV6MsCsGXPfc2srbgouwrT7fWUkipElt8PgG7MUkV1HDxd3I1nNDDK0QHqYRJgzOyGWqmkh3Irr1hEUaRhhRa~gH5zWMr1GF7CE0DUWd0u0zg__');
INSERT INTO Product (id, name, price, stock, image) VALUES (8, 'Caipirinha de morango', 28.0, 20, 'https://receitason.com/wp-content/uploads/2022/12/caipirinha-de-morango-1.jpg');
INSERT INTO Product (id, name, price, stock, image) VALUES (9, 'Fitzgerald da casa', 23.5, 15, 'https://mixologynews.com.br/wp-content/uploads/2022/12/fitzgerald-759x500.jpg');
INSERT INTO Product (id, name, price, stock, image) VALUES (10, 'Cosmopolitan', 45.0, 8, 'https://s3-alpha-sig.figma.com/img/9aaf/db14/200a99bdbffb8ad0406f1f0a278cf05d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DsI3zW6gpi3cQp52bMdPDVaLxG-imCKc~uEkb5aNPv9yVnWeENQsIiAnaQ92m5hyBTLUknU~MpRqoOW0qQ3BLrQrUEUS9qNvST5r17-CHUSY-Sq87Jaz22V2E6tDOMbrN3b6DSKrDUXKKS6g7AP9uqxQ5gokeSOdCjiW4QNeLtxRexFAay6Fs6NGXDa2YspUyMcybysjWDzg3L6PkwvK72GQ90s0-LgMCv8HAkiyUz6wGb-~Yyfq3DEMYSvdcceHWfGYso9jlHqtpa-g0AljxOEzZCucGZndvuZUSbzfnuV34RJhw1NsSU7r~AKezxTBo-gmbEqGf7OboEts3itxUQ__');

-- Inserindo pedidos
INSERT INTO UserOrder (id, userId, total, createdAt) VALUES (1, 1, 29.9, '2024-10-01 20:35:11.457');
INSERT INTO UserOrder (id, userId, total, createdAt) VALUES (2, 1, 54.20, '2024-10-02 22:12:11.457');
INSERT INTO UserOrder (id, userId, total, createdAt) VALUES (3, 1, 45.0, '2024-10-02 22:57:11.457');
INSERT INTO UserOrder (id, userId, total, createdAt) VALUES (4, 1, 27.5, '2024-10-02 23:42:11.457');

-- Inserindo itens do pedido
INSERT INTO UserOrderItem (id, userOrderId, productId, quantity) VALUES (1, 1, 4, 1);
INSERT INTO UserOrderItem (id, userOrderId, productId, quantity) VALUES (2, 2, 3, 1);
INSERT INTO UserOrderItem (id, userOrderId, productId, quantity) VALUES (3, 3, 2, 1);
INSERT INTO UserOrderItem (id, userOrderId, productId, quantity) VALUES (4, 4, 1, 1);