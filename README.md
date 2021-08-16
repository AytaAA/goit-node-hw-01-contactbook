1. Получаем и выводим весь список контактов в виде таблицы (console.table)
   node index.js --action list

https://monosnap.com/file/U0lOkKOSIZitxcVMRGtDaAmYCfwqlt

2. Получаем контакт по id
   node index.js --action get --id 5
   https://monosnap.com/file/txn6knM6VP2ocT2J1bDTUcYvi4U1kA

3. Добавляем контакт
   node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
   https://monosnap.com/file/rDsapTNByjl8LrSdlXDHMuEoI8m5Eu

4. Удаляем контакт
   node index.js --action remove --id=3
   https://monosnap.com/file/vw7dGlz07s4wj07hs2UFdysuhr3dp4
