document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

function formatRupiah(input) {
  let angka = input.value.replace(/[^\d]/g, '');
  if (!angka) {
    input.value = '';
    return;
  }
  input.value = parseInt(angka, 10).toLocaleString('id-ID');
}

function previewImage() {
    const input = document.getElementById('image');
      const preview = document.getElementById('imagePreview');
        const file = input.files[0];

          if (file) {
              const reader = new FileReader();
                  reader.onload = function(e) {
                        preview.src = e.target.result;
                              preview.style.display = 'block';
                                  }
                                      reader.readAsDataURL(file);
                                        }
                                        }

                                        function formatRupiah(input) {
                                          let value = input.value.replace(/\D/g, '');
                                            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                                              input.value = value;
                                              }

                                              function parseRupiah(str) {
                                                return parseInt(str.replace(/\./g, '')) || 0;
                                                }

                                                function hitung() {
                                                  const harga = parseRupiah(document.getElementById('harga').value);
                                                    const nominal = parseRupiah(document.getElementById('nominal').value);
                                                      const jangkauan = document.getElementById('jangkauan').value;
                                                        const hasil = document.getElementById('hasil');

                                                          if (!harga || !nominal || nominal <= 0) {
                                                              hasil.innerText = '❌ Mohon isi semua data dengan benar.';
                                                                  return;
                                                                    }

                                                                      const total = Math.ceil(harga / nominal);
                                                                        let satuan = 'hari';

                                                                          if (jangkauan === 'mingguan') satuan = 'minggu';
                                                                            else if (jangkauan === 'bulanan') satuan = 'bulan';
                                                                              else if (jangkauan === 'tahunan') satuan = 'tahun';

                                                                                hasil.innerHTML = `✅ Kamu bisa meraih impianmu dalam <strong>${total} ${satuan}</strong>! 🌈✨<br>Yuk mulai nabung sekarang juga! 💪`;
                                                                                }
}
