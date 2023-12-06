import axios from 'axios';

const API_BASE_URL = 'https://api.aladhan.com/v1/';
export async function getPrayerTimes(latitude: number, longitude: number) {
  
  try {
    const response = await axios.get(
      `${API_BASE_URL}timings`,
      {
        params: {
          latitude,
          longitude,
          method: 2, 
        },
      }
    );
    const prayerTimings = response.data.data.timings;
    const prayerTimesList = {
        'Imsak ': prayerTimings.Imsak ,
        'Fajr ': prayerTimings.Fajr,
        'Sunrise ': prayerTimings.Sunrise ,
        'Dhuhr ': prayerTimings.Dhuhr ,
        'Asr ': prayerTimings.Asr,
        'Sunset ': prayerTimings.Sunset ,
        'Maghrib ': prayerTimings.Maghrib ,
        'Isha ': prayerTimings.Isha,
        'Firstthird ': prayerTimings.Firstthird ,
        'Midnight ': prayerTimings.Midnight ,
        'Lastthird ': prayerTimings.Lastthird,
    };
    console.log(prayerTimesList)
    return prayerTimesList;
  } catch (error) {
    console.error('Get prayer time error:', error);
    return null;
  }

}



const HADITH_API_BASE_URL = 'https://random-hadith-generator.vercel.app/';

export async function getHadith() {
    try {
      const response = await axios.get(`${HADITH_API_BASE_URL}bukhari/`);
      const hadithData = response.data.data; 
  
      const hadithList = {
        book: hadithData.book,
        bookName: hadithData.bookName.trim(), 
        chapterName: hadithData.chapterName.trim(), 
        hadithEnglish: hadithData.hadith_english,
        header: hadithData.header.trim(), 
        id: hadithData.id,
        refNo: hadithData.refno,
      };
  
      return hadithList;
    } catch (error) {
      console.error('Hadith API error:', error);
      return null;
    }
  }
  