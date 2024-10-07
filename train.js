var schedule = [];

        document.getElementById('add-train').onclick = function() {
            var number = document.getElementById('train-number').value;
            var arrival = document.getElementById('arrival-time').value;
            var departure = document.getElementById('departure-time').value;

            if (number && arrival && departure) {
                var train = { number: number, arrival: arrival, departure: departure };
                schedule.push(train);
                displaySchedule();
                calculateTotalTrains();
                document.getElementById('train-number').value = '';
                document.getElementById('arrival-time').value = '';
                document.getElementById('departure-time').value = '';
            }
        };

        function displaySchedule() {
            var list = document.getElementById('train-list');
            list.innerHTML = '';
            schedule.forEach(function(train, index) {
                var li = document.createElement('li');
                li.className = 'train-item';
                li.innerHTML = `Train Number: ${train.number}, Arrival: ${train.arrival}, Departure: ${train.departure} 
                <button onclick="deleteTrain(${index})">Delete</button> 
                <button onclick="updateTrain(${index})">Update</button>`;
                list.appendChild(li);
            });
        }

        function deleteTrain(index) {
            schedule.splice(index, 1);
            displaySchedule();
            calculateTotalTrains();
        }

        function updateTrain(index) {
            var newNumber = prompt('Enter new train number:', schedule[index].number);
            var newArrival = prompt('Enter new arrival time:', schedule[index].arrival);
            var newDeparture = prompt('Enter new departure time:', schedule[index].departure);
            if (newNumber && newArrival && newDeparture) {
                schedule[index].number = newNumber;
                schedule[index].arrival = newArrival;
                schedule[index].departure = newDeparture;
                displaySchedule();
            }
        }

        function calculateTotalTrains() {
            document.getElementById('total-trains').innerText = schedule.length;
        }