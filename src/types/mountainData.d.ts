export interface MountainData {
  mnt_id: number;
  mnt_name: string;
  course_id: number;
  max_ele: number;
  total_length_km: string;
  total_time: string;
  start_name: string;
  end_name: string;
  level: string;
  course_name: string;
  min_ele: number;
  track: Array<{
    path_id: number;
    path: Array<{
      lat: number;
      lng: number;
      ele: number;
    }>;
    color: string;
    start_name: string;
    end_name: string;
    length_meter: number;
    time_minute: number;
  }>;
}
