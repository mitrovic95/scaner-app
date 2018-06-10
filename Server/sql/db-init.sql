use scanner_db;

SET FOREIGN_KEY_CHECKS = 0;

insert into category (name) values ('Electronic companies');

insert into category (name) values ('Pharmacy companies');

insert into category (name) values ('Trade companies');


insert into company_category(category_id, company_id) values (1, 1);

insert into company_category(category_id, company_id) values (1, 2);

insert into company_category(category_id, company_id) values (1, 3);

insert into company_category(category_id, company_id) values (2, 4);

insert into company_category(category_id, company_id) values (2, 5);

insert into company_category(category_id, company_id) values (2, 6);

insert into company_category(category_id, company_id) values (3, 7);

insert into company_category(category_id, company_id) values (3, 8);

insert into company_category(category_id, company_id) values (3, 9);

insert into company_category(category_id, company_id) values (3, 10);


insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(7106227428177,'Chicony Electronics 40022-04 - 585w Ds3500/ds3512//exp3500 Psu', 'Power supply',  2335, 50, 1);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(713228254291,'Chord Electronics 2Qute DAC Black', 'Chordette',  4556, 120, 1);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(4260247671395,'Kramer Electronics 15-pin HD VGA', 'Cable',  7788, 20, 1);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(888651426338,'Ac Adapter Power Supply Cord Battery Charger', 'Battery Charger',  5674, 40, 1);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(721866087942,'Organic Pharmacy Rose & Bilberry Toning Gel 50ml - Pack of 2', 'Organic Toning Gel',  1121, 60, 2);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(5060063493992,'The Organic Pharmacy Rose Balm', 'Organic Balm',  4112, 65, 2);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(5060063490311,'The Organic Pharmacy Detox Capsules', 'Organic Capsules',  8113, 130, 2);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(612653011366,'The Organic Pharmacy Skin Brush 1Pc', 'Skin Brush',  4775, 25, 2);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(813267020014,'2% Reduced Fat Milk', 'Milk',  3344, 1, 3);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(4779027970318,'The Meat Makers Original Taste Dried Beef Steak, 200g', 'Beef Steak',  7733, 25, 3);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(049000012590,'Coca-Cola 3 Liter', 'Coca-Cola',  2590, 20, 3);

insert into inventory_item(barcode, description, name, order_number, value, category_id) values 
(9403145001092,'Palm Corned Beef, 15 Ounce Can', 'Corned Beef',  3267, 25, 3);


insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('office@eurotehna.rs', 'Stevan',  'Vučurević', 0213005978, 1);

insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('office@laptopcentar.rs', 'Vladimir',  'Ski', 021424869, 2);

insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('nsbatteryshop@open.telekom.rs', 'Zoran',  'Skaljac', 021523539, 3);

insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('apotekatilia@open.rs', 'Dusan',  'Jotic', 021443857, 4);

insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('goodwill@open.rs', 'Miroslava',  'Laslo',  021467009, 5);

insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('lilly@office.rs', 'Dusan',  'Skaljac', 021777009, 6);

insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('maxi@office.rs', 'Vladimir',  'Vučurević', 021367079, 7);

insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('aroma@office.rs', 'Stevan',  'Laslo', 021446079, 8);

insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('roda@office.rs', 'Zoran',  'Skaljac', 021354324, 9);

insert into contact_person(email, first_name, last_name, phone_number, company_id) values 
('mikromarket@office.rs', 'Vladimir',  'Jotic', 021678244, 10);


insert into company (address, name, valid_licence_till) values ('Bulevar oslobođenja 99', 'Eurotehna', 2025);

insert into company (address, name, valid_licence_till) values ('Poštanska 9', 'Laptop Centar', 2019);

insert into company (address, name, valid_licence_till) values ('ŽELEZNIČKA 36', 'NS-Battery Shop', 2018);

insert into company (address, name, valid_licence_till) values ('Bulevar Oslobodjenja 3a', 'Apoteka Tilia', 2020);

insert into company (address, name, valid_licence_till) values ('Vojvode Bojovića 23', 'GoodWill', 2023);

insert into company (address, name, valid_licence_till) values ('Sutjeska 2', 'Lilly Apoteka 43', 2023);

insert into company (address, name, valid_licence_till) values ('Bulevar Oslobodjenja 52a', 'Maxi', 2020);

insert into company (address, name, valid_licence_till) values ('Petra Drapsina 15', 'Aroma', 2019);

insert into company (address, name, valid_licence_till) values ('Temerinska 108', 'Roda', 2024);

insert into company (address, name, valid_licence_till) values ('Temerinska 50', 'Mikromarket', 2022);


-- insert users
-- password is bojan (bcrypt encoded) 
insert into security_user (username, password, first_name, last_name, role) values 
	('bojan', '$2a$04$BcWOk/EcbJ6W.ueGfYs2Z.vbagrzr2FtDOgzmDAi9mXtkSoaHTQbi', 'Bojan', 'Zrnic', 'SuperAdmin');
	-- password is dejan (bcrypt encoded) 
insert into security_user (username, password, first_name, last_name, role) values 
	('dejan', '$2a$04$vYxgRbEpq15pZFWmuxCl/Ojb6DaVb8csFRahWyA8ZxBGtmf6LxMH.', 'Dejan', 'Mitrovic', 'SuperAdmin');
-- password is 12345 (bcrypt encoded) 
insert into security_user (username, password, first_name, last_name, role) values 
	('marko', '$2a$04$4pqDFh9SxLAg/uSH59JCB.LwIS6QoAjM9qcE7H9e2drFuWhvTnDFi', 'Marko', 'Markovic', 'CompanyAdmin');
-- password is abcdef (bcrypt encoded)
insert into security_user (username, password, first_name, last_name, role) values 
	('petar', '$2a$04$Yr3QD6lbcemnrRNLbUMLBez2oEK15pdacIgfkvymQ9oMhqsEE56EK', 'Petar', 'Petrovic', 'CompanyUser');
