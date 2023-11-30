--
-- PostgreSQL database dump
--

-- Dumped from database version 16rc1
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: apartment_expenses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.apartment_expenses (
    expense_id integer NOT NULL,
    apt_id integer NOT NULL,
    month_year text NOT NULL,
    amount_paid integer NOT NULL,
    notes text
);


--
-- Name: apartment_expenses_apt_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.apartment_expenses_apt_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: apartment_expenses_apt_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.apartment_expenses_apt_id_seq OWNED BY public.apartment_expenses.apt_id;


--
-- Name: apartment_expenses_expense_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.apartment_expenses_expense_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: apartment_expenses_expense_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.apartment_expenses_expense_id_seq OWNED BY public.apartment_expenses.expense_id;


--
-- Name: contracts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contracts (
    contract_id text NOT NULL,
    tenant_id text,
    contract_start date NOT NULL,
    contract_end date NOT NULL,
    rent integer NOT NULL,
    notes text,
    active boolean NOT NULL
);


--
-- Name: invoices; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.invoices (
    invoice_id text NOT NULL,
    tenant_id text NOT NULL,
    invoice_date date NOT NULL,
    amount numeric(10,2) NOT NULL,
    amount_paid numeric(10,2) NOT NULL,
    notes text
);


--
-- Name: main_apartments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.main_apartments (
    apt_id integer NOT NULL,
    building_name text NOT NULL,
    apt_number text NOT NULL,
    total_rooms integer
);


--
-- Name: main_apartments_apt_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.main_apartments_apt_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: main_apartments_apt_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.main_apartments_apt_id_seq OWNED BY public.main_apartments.apt_id;


--
-- Name: monthly_reports; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.monthly_reports (
    report_id text NOT NULL,
    apt_id integer NOT NULL,
    month_year text NOT NULL,
    total_rent_due integer NOT NULL,
    total_rent_paid integer NOT NULL,
    total_expenses integer NOT NULL
);


--
-- Name: monthly_reports_apt_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.monthly_reports_apt_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: monthly_reports_apt_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.monthly_reports_apt_id_seq OWNED BY public.monthly_reports.apt_id;


--
-- Name: rooms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.rooms (
    room_id integer NOT NULL,
    apt_id integer NOT NULL,
    room_number text NOT NULL,
    room_type text,
    capacity integer,
    vacant boolean
);


--
-- Name: rooms_apt_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.rooms_apt_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: rooms_apt_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.rooms_apt_id_seq OWNED BY public.rooms.apt_id;


--
-- Name: rooms_room_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.rooms_room_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: rooms_room_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.rooms_room_id_seq OWNED BY public.rooms.room_id;


--
-- Name: tenants; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tenants (
    tenant_id text NOT NULL,
    room_id integer NOT NULL,
    name text NOT NULL,
    emirates_id text NOT NULL,
    phone_number integer NOT NULL,
    email text,
    date_settle_in date NOT NULL,
    apt_id integer
);


--
-- Name: tenants_room_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tenants_room_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tenants_room_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tenants_room_id_seq OWNED BY public.tenants.room_id;


--
-- Name: apartment_expenses expense_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.apartment_expenses ALTER COLUMN expense_id SET DEFAULT nextval('public.apartment_expenses_expense_id_seq'::regclass);


--
-- Name: apartment_expenses apt_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.apartment_expenses ALTER COLUMN apt_id SET DEFAULT nextval('public.apartment_expenses_apt_id_seq'::regclass);


--
-- Name: main_apartments apt_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.main_apartments ALTER COLUMN apt_id SET DEFAULT nextval('public.main_apartments_apt_id_seq'::regclass);


--
-- Name: monthly_reports apt_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.monthly_reports ALTER COLUMN apt_id SET DEFAULT nextval('public.monthly_reports_apt_id_seq'::regclass);


--
-- Name: rooms room_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rooms ALTER COLUMN room_id SET DEFAULT nextval('public.rooms_room_id_seq'::regclass);


--
-- Name: rooms apt_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rooms ALTER COLUMN apt_id SET DEFAULT nextval('public.rooms_apt_id_seq'::regclass);


--
-- Name: tenants room_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tenants ALTER COLUMN room_id SET DEFAULT nextval('public.tenants_room_id_seq'::regclass);


--
-- Data for Name: apartment_expenses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.apartment_expenses VALUES (1, 1, '02_2023', 220, 'صيانة المطبخ');
INSERT INTO public.apartment_expenses VALUES (2, 1, '03_2023', 350, 'تلفزيون جديد');
INSERT INTO public.apartment_expenses VALUES (3, 2, '02_2023', 400, 'ثلاجة جديدة');
INSERT INTO public.apartment_expenses VALUES (4, 2, '03_2023', 110, 'خزانة جديدة');


--
-- Data for Name: contracts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.contracts VALUES ('dff2e353-20e5-42ab-a914-c9e5ac4639b0', 'fcfe2040-1619-4da4-8b91-958b28014da4', '2023-02-15', '2023-03-15', 1600, NULL, false);
INSERT INTO public.contracts VALUES ('ab80b57e-0bd8-4daa-be69-585a1aec50e3', 'ad5608ee-841d-4c20-9e9a-da2ed56b8279', '2023-02-01', '2023-03-01', 1800, NULL, false);
INSERT INTO public.contracts VALUES ('b6f53fb0-ea98-4485-b72e-768e53e3adba', 'bf689d8c-7b9a-4531-b639-95dce90d4a7f', '2023-03-04', '2023-04-04', 1500, NULL, true);
INSERT INTO public.contracts VALUES ('c0344f8d-441a-4497-bf3c-7f9059181b43', 'ad5608ee-841d-4c20-9e9a-da2ed56b8279', '2023-03-01', '2023-04-01', 1800, NULL, true);
INSERT INTO public.contracts VALUES ('2c9afac7-317c-40af-9e77-cd1cfc1f3e18', 'fcfe2040-1619-4da4-8b91-958b28014da4', '2023-03-15', '2023-04-15', 1600, NULL, true);


--
-- Data for Name: invoices; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.invoices VALUES ('invoice/8898', 'tenant/3003', '2023-07-28', 800.00, 550.00, 'test Invoice');


--
-- Data for Name: main_apartments; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.main_apartments VALUES (1, 'الاتحاد', '602', 5);
INSERT INTO public.main_apartments VALUES (2, 'الاندلس', '805', 4);
INSERT INTO public.main_apartments VALUES (3, 'Sunny Heights', '101', 3);
INSERT INTO public.main_apartments VALUES (4, 'Maple Gardens', '207', 5);
INSERT INTO public.main_apartments VALUES (5, 'Ocean View Plaza', '412', 8);
INSERT INTO public.main_apartments VALUES (6, 'Pine Ridge Residences', '550', 4);
INSERT INTO public.main_apartments VALUES (7, 'Meadowside Manor', '625', 6);
INSERT INTO public.main_apartments VALUES (8, 'Urban Oasis Towers', '804', 2);
INSERT INTO public.main_apartments VALUES (9, 'Cityscape Apartments', '916', 7);
INSERT INTO public.main_apartments VALUES (10, 'Harbor Lights Residency', '1030', 5);
INSERT INTO public.main_apartments VALUES (11, 'Majestic View Estates', '1201', 4);
INSERT INTO public.main_apartments VALUES (12, 'Tranquil Haven Homes', '1315', 9);


--
-- Data for Name: monthly_reports; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: rooms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.rooms VALUES (7, 2, 'B3', 'عادي', 2, true);
INSERT INTO public.rooms VALUES (6, 2, 'B2', 'عادي', 1, false);
INSERT INTO public.rooms VALUES (5, 2, 'B1', 'استوديو', 2, true);
INSERT INTO public.rooms VALUES (2, 1, 'A2', 'عادي', 1, false);
INSERT INTO public.rooms VALUES (4, 1, 'A4', 'ماستر', 1, true);
INSERT INTO public.rooms VALUES (8, 2, 'B4', 'ماستر', 2, true);
INSERT INTO public.rooms VALUES (3, 1, 'A3', 'ماستر', 3, true);
INSERT INTO public.rooms VALUES (1, 1, 'A1', 'عادي', 2, true);
INSERT INTO public.rooms VALUES (9, 1, 'A5', 'استوديو', 3, true);


--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tenants VALUES ('ad5608ee-841d-4c20-9e9a-da2ed56b8279', 6, 'عبدالكريم عبدالله', '784-1992-1234567', 501234567, 'kareemAbdullah@gmail.com', '2023-02-01', 2);
INSERT INTO public.tenants VALUES ('bf689d8c-7b9a-4531-b639-95dce90d4a7f', 5, 'احمد كريم', '784-1991-1234567', 501234567, 'ahmedKarim@gmail.com', '2023-03-04', 2);
INSERT INTO public.tenants VALUES ('fcfe2040-1619-4da4-8b91-958b28014da4', 2, 'عبدالقادر احمد', '784-1995-1234567', 501234567, 'kaderAhmed@gmail.com', '2023-02-15', 1);
INSERT INTO public.tenants VALUES ('tenant/3003', 4, 'Test Tenant', '33334444444', 1234567, 'test@mail.com', '2023-07-18', 1);


--
-- Name: apartment_expenses_apt_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.apartment_expenses_apt_id_seq', 1, false);


--
-- Name: apartment_expenses_expense_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.apartment_expenses_expense_id_seq', 4, true);


--
-- Name: main_apartments_apt_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.main_apartments_apt_id_seq', 12, true);


--
-- Name: monthly_reports_apt_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.monthly_reports_apt_id_seq', 1, false);


--
-- Name: rooms_apt_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.rooms_apt_id_seq', 1, false);


--
-- Name: rooms_room_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.rooms_room_id_seq', 9, true);


--
-- Name: tenants_room_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tenants_room_id_seq', 1, true);


--
-- PostgreSQL database dump complete
--

