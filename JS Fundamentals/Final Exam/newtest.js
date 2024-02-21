function concert(input) {
  let bands = new Map();

  for (const line of input) {
    if (line === "Start!") {
      break;
    }

    let [command, bandName, ...args] = line.split("; ");

    if (command === "Add") {
      let members = args[0].split(", ");

      if (!bands.has(bandName)) {
        bands.set(bandName, new Set(members));
      } else {
        members.forEach((member) => bands.get(bandName).add(member));
      }
    } else if (command === "Play") {
      let time = Number(args[0]);

      if (!bands.has(bandName)) {
        bands.set(bandName, new Set());
      }

      let currentBand = bands.get(bandName);
      let totalTime = 0;

      currentBand.forEach((value) => (totalTime += value));

      totalTime += time;
      currentBand.add(time);
    }
  }

  let totalTime = 0;
  for (let [band, time] of [...bands].sort((a, b) => b[1] - a[1])) {
    totalTime += time;
    console.log(`${band} -> ${time}`);
  }
  console.log(`Total time: ${totalTime}`);

  let firstBand = [...bands][0][0];
  console.log(firstBand);
  let members = [...bands.get(firstBand)].sort((a, b) => a.localeCompare(b));
  members = members.map((x) => `=> ${x}`).join("\n");
  console.log(members);
}

concert([
  "Play; The Beatles; 2584",
  "Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
  "Add; The Beatles; Paul McCartney, George Harrison",
  "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
  "Play; The Rolling Stones; 4239",
  "Start!",
]);

  concert((["Play; The Beatles; 2584",
"Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
"Add; The Beatles; Paul McCartney, George Harrison",
"Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
"Play; The Rolling Stones; 4239",
"Start!"]))  