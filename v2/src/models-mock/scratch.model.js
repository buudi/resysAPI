
exports.selectApartments = () => {
    return {
        flag: "mock",
        apartments: [
            {
                "apt_id": 1,
                "building_name": "الاتحاد",
                "apt_number": "602",
                "total_rooms": 5
            },
            {
                "apt_id": 2,
                "building_name": "الاندلس",
                "apt_number": "805",
                "total_rooms": 4
            }
        ]
    };
}

exports.selectTenants = () => {
    return {
        flag: "mock",
        tenants: [
            {
                "tenant_id": "ad5608ee-841d-4c20-9e9a-da2ed56b8279",
                "room_id": 6,
                "name": "عبدالكريم عبدالله",
                "emirates_id": "784-1992-1234567",
                "phone_number": 501234567,
                "email": "kareemAbdullah@gmail.com",
                "date_settle_in": "2023-01-31T16:00:00.000Z",
                "apt_id": 2
            },
            {
                "tenant_id": "bf689d8c-7b9a-4531-b639-95dce90d4a7f",
                "room_id": 5,
                "name": "احمد كريم",
                "emirates_id": "784-1991-1234567",
                "phone_number": 501234567,
                "email": "ahmedKarim@gmail.com",
                "date_settle_in": "2023-03-03T16:00:00.000Z",
                "apt_id": 2
            },
            {
                "tenant_id": "fcfe2040-1619-4da4-8b91-958b28014da4",
                "room_id": 2,
                "name": "عبدالقادر احمد",
                "emirates_id": "784-1995-1234567",
                "phone_number": 501234567,
                "email": "kaderAhmed@gmail.com",
                "date_settle_in": "2023-02-14T16:00:00.000Z",
                "apt_id": 1
            }]
    };
}